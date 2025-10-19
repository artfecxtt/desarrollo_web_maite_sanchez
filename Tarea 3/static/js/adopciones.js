
const filas = document.querySelectorAll('.fila-clickeable');

filas.forEach(fila => {
    fila.addEventListener('click', () => {
      const idCompleto = fila.id; // agarra el string del id de la fila

      const id = idCompleto.split('-')[1]; // saca lo q viene después del -
            
      window.location.href = `/adopcion/${id}`;
    });
});



// #########################################################################################

//botón de portada
const goToPortada = () => {
    window.location.href = PORTADA_URL
}

let portadabtn = document.getElementById("btn-portada");
portadabtn.addEventListener("click", goToPortada)