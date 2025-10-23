
const goToPortada = () => {
    window.location.href = PORTADA_URL
}

let portadabtn = document.getElementById("btn-portada");
portadabtn.addEventListener("click", goToPortada)

// ###########################################################

const goToAdopciones = () => {
    window.location.href = ADOPCIONES_URL
}

let adopcionesbtn = document.getElementById("btn-adopciones");
adopcionesbtn.addEventListener("click", goToAdopciones)

// ###########################################################

const open_popout = (id) => {
    let pop = document.getElementById(id)
    pop.style.display = "flex"
}

const close_popout = (id) => {
    let pop = document.getElementById(id)
    pop.style.display = "none"
}

// ############################################################
// validaciones del forms

const validarForm = () => {

    let msg = "";

    const validadorNombre = (nombre) => nombre && (nombre.trim().length >= 3) && (nombre.trim().length<=80);
    const validadorComentario = (comentario) => comentario && (comentario.trim().length>=5);

    let nombreInput = document.getElementById("form-nombre");
    let comentarioInput = document.getElementById("form-comentario");

    if(!validadorNombre(nombreInput.value)){
        msg+= "- Nombre es obligatorio, debe tener entre 3 y 80 caracteres <br>"
        nombreInput.style.borderColor = "red";
    }else{
        nombreInput.style.borderColor = "";
    }

    if(!validadorComentario(comentarioInput.value)){
        msg+="- Comentario es obligatorio, debe tener como mínimo 5 caracteres <br>"
        comentarioInput.style.borderColor = "red";
    }else{
        comentarioInput.style.borderColor = ""
    }

    if (msg !== ""){
        document.getElementById("error-forms").hidden = false
        document.getElementById("error-forms").innerHTML = "Errores en el formulario: <br>" + msg + "<br>";
        return;
    } else {
        document.getElementById("error-forms").hidden = true
    }
}
// #####################################

const formComentario = document.getElementById("form-add-comentario")
const alertContainer = document.getElementById("alert-forms")
const comentariosContainer = document.getElementById("div-comentarios")


let fetchAJAX = (nombre, texto) => {
    const aviso_id = formComentario.getAttribute("aviso-id")
    const ENDPOINT = `/adopcion/${aviso_id}`
    const datos = { nombre, texto }

    alertContainer.textContent = ''

    fetch(ENDPOINT, {method: "POST", 
        headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(datos) })
        .then((response => {
            return response.json().then((response_2 => {
                if (!response.ok){
                    error_msg = response_2.error
                    throw new Error(error_msg)
                }
                return response_2
            }))
        }))
        .then((ajaxResponse) => {
            mensaje = ajaxResponse.message
            alertContainer.textContent = mensaje;
            
            const fecha = ajaxResponse.comentario.fecha
            const nombre = ajaxResponse.comentario.nombre
            const texto = ajaxResponse.comentario.texto

            const p_nombre = document.createElement("p")
            p_nombre.className = "texto"
            p_nombre.innerHTML = `${nombre} - ${fecha}:`

            const p_texto = document.createElement("p")
            p_texto.className="texto"
            p_texto.innerHTML = `${texto}`

            const hr = document.createElement("hr")

            const div_comentario = document.createElement("div")
            div_comentario.append(p_nombre)
            div_comentario.append(p_texto)
            div_comentario.append(hr)

            comentariosContainer.prepend(div_comentario)

            formComentario.reset()
        })
        .catch((error) => {
            alertContainer.textContent = "Error en el servidor: \n"+ error_msg;
            console.error(
                "There has been an error with your fetch operation:", 
                error
            );
        })
}

let alClick = (evento) => {
    evento.preventDefault()

    const nombre = document.getElementById('form-nombre').value.trim();
    const texto = document.getElementById('form-comentario').value.trim();

    fetchAJAX(nombre, texto)
}

let comentariobtn = document.getElementById("btn-comentario");
comentariobtn.addEventListener("click", alClick)
