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

// ###########################################################

const open_popout_1 = () => {
    let pop = document.getElementById("img-1")
    pop.style.display = "flex"
}

const open_popout_2 = () => {
    let pop = document.getElementById("img-2")
    pop.style.display = "flex"
}

const open_popout_3 = () => {
    let pop = document.getElementById("img-3")
    pop.style.display = "flex"
}

let pop_img1 = document.getElementById("img1")
pop_img1.addEventListener("click", open_popout_1)
let clbtn1 = document.getElementById("closeBtn1")
clbtn1.addEventListener("click", () =>{
    document.getElementById("img-1").style.display = "none"
})

let pop_img2 = document.getElementById("img2")
pop_img2.addEventListener("click", open_popout_2)
let clbtn2 = document.getElementById("closeBtn2")
clbtn2.addEventListener("click", () =>{
    document.getElementById("img-2").style.display = "none"
})

let pop_img3 = document.getElementById("img3")
pop_img3.addEventListener("click", open_popout_3)
let clbtn3 = document.getElementById("closeBtn3")
clbtn3.addEventListener("click", () =>{
    document.getElementById("img-3").style.display = "none"
})
