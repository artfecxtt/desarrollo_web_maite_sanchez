const goToPortada = () => {
    window.location.href = "../html/portada.html"
}

let portadabtn = document.getElementById("btn-portada");
portadabtn.addEventListener("click", goToPortada)