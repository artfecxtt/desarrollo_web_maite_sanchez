import re
import filetype

def validate_comuna(comuna_id):
    return comuna_id

def validate_sector(sector):
    return (len(sector) <= 100)

def validate_name(nombre):
    return nombre and (len(nombre.strip())>=3) and (len(nombre.strip())<=200)

def validador_email(email):
    expreg = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    return email and len(email) <= 100 and bool(re.match(expreg, email))

def validador_celular(celular):
    expreg = r'^\+\d{3}\.\d{8,10}$'
    return bool(re.match(expreg, celular))

def validate_contacto(contacto, metodo):
    if contacto != "":
        return len(metodo.strip()) >=4 and len(metodo.strip()) <= 50
    else:
        return True

def validador_tipo(tipo):
    return tipo != "" and tipo

def validador_cantidad(cantidad):
    if cantidad:
        numero = int(cantidad)
        if numero >=1:
            return True
        else:
            return False
    else:
        return False
    
def validador_edad(edad):
    if edad:
        numero = int(edad)
        if numero >=1:
            return True
        else:
            return False
    else:
        return False
    
def validador_unidad(unidad):
    return unidad and unidad != ""

def validate_fotos(fotos):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    if fotos is None:
        return False

    if fotos.filename == "":
        return False

    ftype_guess = filetype.guess(fotos)
    if ftype_guess is None:
        return False
    else:
        if ftype_guess.extension not in ALLOWED_EXTENSIONS:
            return False

        if ftype_guess.mime not in ALLOWED_MIMETYPES:
            return False
        return True

def validate_create_adopcion(comuna_id, sector, nombre, 
                             email, celular, tipo, cantidad,
                               edad, unidad_medida,
                                 fecha_entrega,
                                   descripción):
    return validate_comuna(comuna_id) and validate_sector(sector) and validate_name(nombre) \
        and validador_email(email) and validador_celular(celular) \
        and validador_tipo(tipo) and validador_cantidad(cantidad) \
        and validador_unidad(unidad_medida) and validador_edad(edad)

def validate_create_foto(fotos):
    for foto in fotos:
        if not validate_fotos(foto):
            return False 
    return True

def validate_create_contacto(contacto, metodo):
    return validate_contacto(contacto, metodo)

def validate_comentario_nombre(nombre):
    return nombre and (len(nombre.strip()) >= 3) and (len(nombre.strip()) <= 80)

def validate_comentario_texto(texto):
    return texto and (len(texto.strip()) >= 5)

def validate_comentario(nombre, texto):
    return validate_comentario_nombre(nombre) and validate_comentario_texto(texto)