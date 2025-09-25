from flask import Flask, request, render_template, redirect, url_for, session
#from utils.validations import validate_login_user, validate_register_user, validate_confession
from db.models import AvisoAdopcion, Comuna, Region, Foto, ContactarPor
from db.db import SessionLocal, get_region_by_aviso, get_number_of_photos_by_aviso, get_main_photo_by_aviso, get_comuna_by_aviso, get_photos_by_aviso, get_contactos_by_aviso
from sqlalchemy import create_engine, Column, Integer, DateTime, String, Enum, Text, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)


app.secret_key = "s3cr3t_k3y"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

@app.route("/portada")
@app.route("/")
def portada():
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
    return render_template("portada.html", datos=datos_completos)

@app.route("/agregar-avisos")
def agregar_avisos():
    return render_template("agregar-avisos.html")

@app.route("/adopciones")
def adopciones():

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

    return render_template("adopciones.html", datos=datos_completos)

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