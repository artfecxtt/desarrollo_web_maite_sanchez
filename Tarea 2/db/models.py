from sqlalchemy import create_engine, Column, Integer, DateTime, String, Enum, Text, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship

from .db import Base

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
    foto = relationship("Foto", back_populates="aviso")
    contacto = relationship("ContactarPor", back_populates="contacto")

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
    actividad_id = Column(Integer, ForeignKey('avisos_adopcion.id'), nullable=False)

    aviso = relationship("AvisoAdopcion", back_populates="foto")

class ContactarPor(Base):
    __tablename__ = 'contactar_por'

    id = Column(Integer, primary_key=True)
    nombre = Column(Enum('whatsapp', 'telegram', 'X', 'instagram', 'tiktok', 'otra'), nullable=False)
    identificador = Column(String(150), nullable = False)
    actividad_id = Column(Integer, ForeignKey('avisos_adopciones.id'), nullable=False)

    aviso = relationship("AvisoAdopcion", back_populates="contacto")

