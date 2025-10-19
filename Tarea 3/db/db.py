from sqlalchemy import create_engine, Column, Integer, DateTime, String, Enum, Text, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
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



#MODELS

class AvisoAdopcion(Base):
    __tablename__ = 'aviso_adopcion'

    id = Column(Integer, primary_key=True)
    fecha_ingreso = Column(DateTime, nullable=False)
    comuna_id = Column(Integer, ForeignKey('comuna.id'), nullable=False)
    sector = Column(String(100), nullable=True)
    nombre = Column(String(200), nullable=False)
    email = Column(String(100), nullable=False)
    celular = Column(String(15), nullable=True)
    tipo = Column(Enum('gato', 'perro'), nullable=False)
    cantidad = Column(Integer, nullable=False)
    edad = Column(Integer, nullable=False)
    unidad_medida = Column(Enum('a', 'm'), nullable=False)
    fecha_entrega = Column(DateTime, nullable=False)
    descripcion = Column(Text(500), nullable = True)

    comuna = relationship("Comuna", back_populates="avisos")
    fotos = relationship("Foto", back_populates="aviso", foreign_keys="[Foto.actividad_id]")
    contactos = relationship("ContactarPor", back_populates="aviso", foreign_keys="[ContactarPor.actividad_id]")

class Comuna(Base):
    __tablename__ = 'comuna'

    id = Column(Integer, primary_key=True)
    nombre = Column(String(200), nullable=False)
    region_id = Column(Integer, ForeignKey('region.id'), nullable = False)

    avisos = relationship("AvisoAdopcion", back_populates="comuna")
    region = relationship("Region", back_populates="comunas")

class Region(Base):
    __tablename__ = 'region'

    id = Column(Integer, primary_key=True)
    nombre = Column(String(200), nullable=False)

    comunas = relationship("Comuna", back_populates="region")

class Foto(Base):
    __tablename__ = 'foto'

    id = Column(Integer, primary_key=True)
    ruta_archivo = Column(String(300), nullable=False)
    nombre_archivo = Column(String(300), nullable=False)
    actividad_id = Column(Integer, ForeignKey('aviso_adopcion.id'), nullable=False)

    aviso = relationship("AvisoAdopcion", back_populates="fotos", foreign_keys=[actividad_id])

class ContactarPor(Base):
    __tablename__ = 'contactar_por'

    id = Column(Integer, primary_key=True)
    nombre = Column(Enum('whatsapp', 'telegram', 'X', 'instagram', 'tiktok', 'otra'), nullable=False)
    identificador = Column(String(150), nullable = False)
    actividad_id = Column(Integer, ForeignKey('aviso_adopcion.id'), nullable=False)

    aviso = relationship("AvisoAdopcion", back_populates="contactos", foreign_keys=[actividad_id])


###########################################################################################################


def get_photos_by_aviso(aviso_id):
    session = SessionLocal()
    fotos = session.query(Foto).filter_by(actividad_id=aviso_id).all()
    session.close()
    return fotos

def get_main_photo_by_aviso(aviso_id):
    session = SessionLocal()
    foto = session.query(Foto).filter_by(actividad_id=aviso_id).first()
    session.close()
    return foto

def get_contactos_by_aviso(aviso_id):
    session = SessionLocal()
    contactos = session.query(ContactarPor).filter_by(actividad_id=aviso_id).all()
    session.close()
    return contactos

def get_comuna_by_aviso(aviso_id):
    session = SessionLocal()
    aviso = session.query(AvisoAdopcion).filter_by(id=aviso_id).first()
    comuna_id = aviso.comuna_id
    comuna = session.query(Comuna).filter_by(id=comuna_id).first()
    session.close()
    return comuna

def get_region_by_aviso(aviso_id):
    session = SessionLocal()
    comuna = get_comuna_by_aviso(aviso_id)
    region_id = comuna.region_id
    region = session.query(Region).filter_by(id=region_id).first()
    session.close()
    return region

def get_number_of_photos_by_aviso(aviso_id):
    session = SessionLocal()
    number = session.query(Foto).filter_by(actividad_id=aviso_id).count()
    session.close()
    return number

def create_adopcion(comuna_id, sector, nombre, email, celular, tipo, cantidad, edad, unidad_medida, fecha_entrega, descripcion):
    session = SessionLocal()
    new_adopcion = AvisoAdopcion(
        fecha_ingreso=datetime.datetime.now(),  
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
    session.refresh(new_adopcion)
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
    session.refresh(new_foto)
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
    session.refresh(new_contacto)
    session.close()