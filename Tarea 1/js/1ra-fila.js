const goToPortada = () => {
    window.location.href = "../html/portada.html"
}

let portadabtn = document.getElementById("btn-portada");
portadabtn.addEventListener("click", goToPortada)

// ###########################################################

const goToAdopciones = () => {
    window.location.href = "../html/adopciones.html"
}

let adopcionesbtn = document.getElementById("btn-adopciones");
adopcionesbtn.addEventListener("click", goToAdopciones)