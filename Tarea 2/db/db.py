from sqlalchemy import create_engine, Column, Integer, DateTime, String, Enum, Text, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
from .models import AvisoAdopcion, Comuna, Region, Foto, ContactarPor
import datetime

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = "3306"

DATABASE_URL = f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine)

Base=declarative_base()

def get_photos_by_aviso(aviso_id):
    session = SessionLocal()
    fotos = session.query(Foto).filter_by(aviso_id=aviso_id).all()
    session.close()
    return fotos

def get_main_photo_by_aviso(aviso_id):
    session = SessionLocal()
    foto = session.query(Foto).filter_by(aviso_id=aviso_id).first()
    session.close()
    return foto

def get_contactos_by_aviso(aviso_id):
    session = SessionLocal()
    contactos = session.query(ContactarPor).filter_by(aviso_id=aviso_id).all()
    session.close()
    return contactos

def get_comuna_by_aviso(aviso_id):
    session = SessionLocal()
    aviso = session.query(AvisoAdopcion).filter_by(aviso_id=aviso_id)
    comuna_id = aviso.comuna_id
    comuna = session.query(Comuna).filter_by(comuna_id=comuna_id)
    session.close()
    return comuna

def get_region_by_aviso(aviso_id):
    session = SessionLocal()
    comuna = get_comuna_by_aviso(aviso_id)
    region_id = comuna.region_id
    region = session.query(Region).filter_by(region_id=region_id)
    session.close()
    return region

def get_number_of_photos_by_aviso(aviso_id):
    session = SessionLocal()
    number = session.query(Foto).filter_by(aviso_id=aviso_id).count()
    session.close()
    return number

def create_adopcion(comuna_id, sector, nombre, email, celular, tipo, cantidad, edad, unidad_medida, fecha_entrega, descripcion):
    session = SessionLocal()
    new_adopcion = AvisoAdopcion(
        fecha_ingreso=datetime.now(),  
        sector = sector, 
        comuna_id=comuna_id,  
        nombre=nombre,
        email=email,
        celular=celular,
        tipo=tipo,
        cantidad=cantidad,
        edad=edad,
        unidad_medida=unidad_medida,
        fecha_entrega=fecha_entrega, 
        descripcion=descripcion
    )

    session.add(new_adopcion)
    session.commit()
    session.close()

    return new_adopcion

def create_foto(ruta_archivo, nombre_archivo, actividad_id):
    session = SessionLocal()
    new_foto = Foto(
        ruta_archivo=ruta_archivo,
        nombre_archivo=nombre_archivo,
        actividad_id=actividad_id
    )

    session.add(new_foto)
    session.commit()
    session.close()

def create_contacto(nombre, identificador, actividad_id):
    session = SessionLocal()
    new_contacto = ContactarPor(
        nombre = nombre, 
        identificador = identificador, 
        actividad_id = actividad_id
    )

    session.add(new_contacto)
    session.commit()
    session.close()