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

