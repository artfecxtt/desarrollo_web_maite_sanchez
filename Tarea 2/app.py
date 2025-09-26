from flask import Flask, request, render_template, redirect, url_for, session
#from utils.validations import validate_login_user, validate_register_user, validate_confession
from db.models import AvisoAdopcion, Comuna, Region, Foto, ContactarPor
from db.db import SessionLocal, register_adopcion, get_region_by_aviso, get_number_of_photos_by_aviso, get_main_photo_by_aviso, get_comuna_by_aviso, get_photos_by_aviso, get_contactos_by_aviso, create_adopcion, create_contacto, create_foto
from sqlalchemy import create_engine, Column, Integer, DateTime, String, Enum, Text, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
from werkzeug.utils import secure_filename
from utils.validations import validate_create_adopcion
import hashlib
import filetype
import os

UPLOAD_FOLDER = 'static/uploads'
ITEMS_PER_PAGE = 5

app = Flask(__name__)


app.secret_key = "programacionweb"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

@app.route("/portada/<int:page_num>")
def portada(page_num):
    paginated_avisos = AvisoAdopcion.query.paginate(per_page=ITEMS_PER_PAGE, page=page_num, error_out=True)

    datos_completos = []
    for dato in paginated_avisos.items:

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
    
    return render_template("portada.html", datos=datos_completos, paginacion=paginated_avisos)

@app.route("/agregar-avisos", methods=["GET", "POST"])
def agregar_avisos():
    if request.method == "POST":
        comuna_id = request.form.get("comuna-id")
        sector = request.form.get("sector")
        nombre = request.form.get("nombre")
        email = request.form.get("email")
        celular = request.form.get("nro-celular")
        tipo = request.form.get("tipo-mascota")
        cantidad = request.form.get("cantidad")
        edad = request.form.get("edad-animal")
        unidad_medida = request.form.get("unidad-edad")
        fecha_entrega = request.form.get("fecha-entrega")
        descripción = request.form.get("descripcion")

        error=""

        if validate_create_adopcion(comuna_id, sector, nombre, email, celular, tipo, cantidad, edad, unidad_medida, fecha_entrega, descripción):
            new_aviso = create_adopcion(comuna_id, sector, nombre, email, celular, tipo, cantidad, edad, unidad_medida, fecha_entrega, descripción)
        else:
            error += "Uno de los campos no es válido"

        fotos = request.files.getlist("fotos")
        for foto in fotos:
            if validate_create_foto(fotos):
                _filename = hashlib.sha256(
                    secure_filename(foto.filename) # nombre del archivo
                    .encode("utf-8") # encodear a bytes
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
            else:
                error += "Fotos inválidas"
        
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
        
        for indice, contacto in enumerate(contactos):
            if validate_create_contacto(contacto, metodos[indice]):
                create_contacto(
                    nombre = contacto,
                    identificador = metodos[indice],
                    actividad_id = new_aviso.id
                )
            else:
                error += "Contactos inválidos"



    return render_template("agregar-avisos.html", error=error)

@app.route("/adopciones/<int:page_num>")
def adopciones(page_num):
    paginated_avisos = AvisoAdopcion.query.paginate(per_page=ITEMS_PER_PAGE, page=page_num, error_out=True)
    
    datos_completos = []
    for dato in paginated_avisos.items:

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

    return render_template("adopciones.html", datos=datos_completos, paginacion=page_num)

@app.route('/adopcion/<int:adopcion_id>')
def detalle_adopcion(adopcion_id):

    session_db = SessionLocal()
    
    datos = session_db.query(AvisoAdopcion).all()
    
    datos_completos = []
    for dato in datos:

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
    
    session_db.close()
    return render_template('1ra-fila.html', datos=datos_completos)

@app.route("/estadisticas")
def estadisticas():
    return render_template("estadisticas.html")

if __name__ == "__main__":
    app.run(debug=True)