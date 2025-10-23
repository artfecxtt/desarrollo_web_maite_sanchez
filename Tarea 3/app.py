from flask import Flask, request, render_template, jsonify
from db.db import DATABASE_URL, SessionLocal, get_region_by_aviso, get_number_of_photos_by_aviso, get_main_photo_by_aviso, get_comuna_by_aviso, get_photos_by_aviso, get_contactos_by_aviso, create_adopcion, create_contacto, create_foto, get_avisos_per_day, get_avisos_per_month_pet_type, get_avisos_per_pet_type, create_comentario, get_comentarios_by_id
from werkzeug.utils import secure_filename
from utils.validations import validate_create_adopcion, validate_create_foto, validate_create_contacto, validate_comentario
import hashlib
import filetype
import os

UPLOAD_FOLDER = 'static/uploads'
ITEMS_PER_PAGE = 5

app = Flask(__name__)

from db.db import AvisoAdopcion, Comuna, Region

app.secret_key = "programacionweb"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

@app.route("/")
@app.route("/portada/<int:page_num>")
def portada(page_num=1):
    session_db = SessionLocal()
    
    avisos = session_db.query(AvisoAdopcion).order_by(AvisoAdopcion.fecha_ingreso.desc()).limit(5).offset((page_num - 1) * 5).all()
    total_avisos =session_db.query(AvisoAdopcion).count()
    total_pages=max(1, (total_avisos + 5 - 1) // 5)

    datos_completos = []
    for dato in avisos:

        fotos = get_photos_by_aviso(dato.id)
        foto_principal = get_main_photo_by_aviso(dato.id)
        num_fotos = get_number_of_photos_by_aviso(dato.id)
        comuna = get_comuna_by_aviso(dato.id)
        region = get_region_by_aviso(dato.id)
        contactos = get_contactos_by_aviso(dato.id)
        
        dato_completo = {
            'aviso': dato,
            'fotos': fotos,
            'foto_principal': foto_principal, 
            'num_fotos': num_fotos,  
            'comuna': comuna,
            'region': region, 
            'contactos': contactos
        }
        datos_completos.append(dato_completo)
    
    return render_template("portada.html", datos=datos_completos, current_page=page_num, total_pages=total_pages)

@app.route("/agregar-avisos", methods=["GET", "POST"])
def agregar_avisos():
    session_db = SessionLocal()
    regiones = session_db.query(Region).all()
    comunas = session_db.query(Comuna).all()

    error = ""
    if request.method == "POST":
        
        new_aviso = False

        comuna_id = int(request.form.get("comuna"))
        sector = request.form.get("sector")
        nombre = request.form.get("nombre")
        email = request.form.get("email")
        celular = request.form.get("nro-celular")
        tipo = request.form.get("tipo-mascota")
        cantidad = int(request.form.get("cantidad")) #creo q vienen en str los value, así q int por si acaso
        edad = int(request.form.get("edad-animal"))
        unidad_medida = request.form.get("unidad-edad")
        fecha_entrega = request.form.get("fecha-entrega")
        descripción = request.form.get("descripcion")

        fotos = request.files.getlist("fotos")

        #si es q tdas las fotos son validas, entonces creamos la adopcion para asociarle las fotos dspués
        if validate_create_foto(fotos):
            if validate_create_adopcion(comuna_id, sector, nombre, email, celular, tipo, cantidad, edad, unidad_medida, fecha_entrega, descripción):
                new_aviso = create_adopcion(comuna_id, sector, nombre, email, celular, tipo, cantidad, edad, unidad_medida, fecha_entrega, descripción)
            else:
                error += "- Uno de los campos no es válido. <br>"
        else:
            error += "- Fotos inválidas. <br>"

        if new_aviso:
            # ingresar fotos
            for foto in fotos:
                #nombre cn hash
                _filename = hashlib.sha256(
                    secure_filename(foto.filename)
                    .encode("utf-8")
                ).hexdigest()
                _extension = filetype.guess(foto).extension
                img_filename = f"{_filename}.{_extension}"

                ruta_archivo = os.path.join(app.config["UPLOAD_FOLDER"], img_filename)
                foto.save(ruta_archivo)

                create_foto(
                    ruta_archivo=app.config["UPLOAD_FOLDER"], 
                    nombre_archivo=img_filename,
                    actividad_id=new_aviso.id 
                )
            
            # ingresar contactos
            contactos = [request.form.get("contacto"), 
                        request.form.get("contacto2"), 
                        request.form.get("contacto3"), 
                        request.form.get("contacto4"), 
                        request.form.get("contacto5")]
            
            metodos = [request.form.get("metodo-contacto"), 
                    request.form.get("metodo-contacto2"), 
                    request.form.get("metodo-contacto3"), 
                    request.form.get("metodo-contacto4"), 
                    request.form.get("metodo-contacto5")]
            
            contactos_validos = True
            for indice, contacto in enumerate(contactos):
                if contacto != "":
                    if not validate_create_contacto(contacto, metodos[indice]):
                        contactos_validos = False
                        error += f"- Contacto '{contacto}' no es válido. <br>"
            
            #crear contactos
            if contactos_validos:
                for indice, contacto in enumerate(contactos):
                    if contacto != "":
                        create_contacto(
                            nombre=contacto,
                            identificador=metodos[indice],
                            actividad_id=new_aviso.id
                        )
            else:
                # si hay contactos q no sirven, se elimina el new_aviso
                session_db.delete(new_aviso)
                session_db.commit()
                error += "- No se pudo crear el aviso debido a contactos inválidos. <br>"
                
        else:
            error += "- No se pudo crear el aviso de adopción. <br>"

    session_db.close()
    return render_template("agregar-avisos.html", error=error, regiones=regiones, comunas=comunas)


@app.route("/adopciones")
@app.route("/adopciones/<int:page_num>")
def adopciones(page_num=1):
    session_db = SessionLocal()
    avisos = session_db.query(AvisoAdopcion).order_by(AvisoAdopcion.fecha_ingreso.desc()).limit(5).offset((page_num - 1) * 5).all()
    total_avisos =session_db.query(AvisoAdopcion).count()
    total_pages=max(1, (total_avisos + 5 - 1) // 5)

    datos_completos = []
    for dato in avisos:

        fotos = get_photos_by_aviso(dato.id)
        foto_principal = get_main_photo_by_aviso(dato.id)
        num_fotos = get_number_of_photos_by_aviso(dato.id)
        comuna = get_comuna_by_aviso(dato.id)
        region = get_region_by_aviso(dato.id)
        contactos = get_contactos_by_aviso(dato.id)
        
        dato_completo = {
            'aviso': dato,
            'fotos': fotos,
            'foto_principal': foto_principal, 
            'num_fotos': num_fotos,  
            'comuna': comuna,
            'region': region, 
            'contactos': contactos
        }
        datos_completos.append(dato_completo)

    return render_template("adopciones.html", datos=datos_completos, current_page=page_num, total_pages = total_pages)

@app.route('/adopcion/<int:adopcion_id>', methods=["GET", "POST"])
def detalle_adopcion(adopcion_id):

    session_db = SessionLocal()
    error = ""
    
    dato = session_db.query(AvisoAdopcion).filter_by(id=adopcion_id).first()

    fotos = get_photos_by_aviso(dato.id)
    foto_principal = get_main_photo_by_aviso(dato.id)
    num_fotos = get_number_of_photos_by_aviso(dato.id)
    comuna = get_comuna_by_aviso(dato.id)
    region = get_region_by_aviso(dato.id)
    contactos = get_contactos_by_aviso(dato.id)
    comentarios = get_comentarios_by_id(dato.id)
        
    dato_completo = {
        'aviso': dato,
        'fotos': fotos,
        'foto_principal': foto_principal, 
        'num_fotos': num_fotos,  
        'comuna': comuna,
        'region': region, 
        'contactos': contactos, 
        'comentarios': comentarios
    }
    
    if request.method == "POST":

        post_datos = request.get_json()

        if post_datos == None:
            return jsonify({"error":"Datos JSON inválidos"})
        
        post_nombre = post_datos.get("nombre")
        post_texto = post_datos.get("texto")


        if validate_comentario(post_nombre, post_texto):
            new_comentario = create_comentario(post_nombre, post_texto, adopcion_id)
            fecha_formateada = new_comentario.fecha.strftime("%Y-%m-%d %H:%M:%S")
            comentario = {"nombre": new_comentario.nombre, "texto": new_comentario.texto, "fecha": fecha_formateada}
            session_db.close()
            return jsonify({"message": "¡Tu comentario ha sido ingresado con éxito, muchas gracias!", 
                            "comentario": comentario})
        else:
            session_db.close()
            return jsonify({"error": "Error de validación de datos, rellena nombre y comentario, nombre de mínimo 3 caracteres y máximo 80, comentario de mínimo 5 caracteres"}), 400

    session_db.close()

    return render_template('1ra-fila.html', error=error, dato=dato_completo)

@app.route("/estadisticas")
def estadisticas():
    return render_template("estadisticas.html")

#ruta para el tema del ajax
@app.route("/get-estadisticas", methods=["GET"])
def get_estadisticas():
    try:
        avisos_por_dia = get_avisos_per_day()
        avisos_por_tipo = get_avisos_per_pet_type()
        avisos_por_mes_tipo = get_avisos_per_month_pet_type()

        return jsonify({"status": "ok", "data": {"g_linea": avisos_por_dia, "g_torta": avisos_por_tipo, "g_barra": avisos_por_mes_tipo}})
    except Exception as error:
        return  jsonify({"status": "error", "data": []}), 400

if __name__ == "__main__":
    app.run(debug=True)