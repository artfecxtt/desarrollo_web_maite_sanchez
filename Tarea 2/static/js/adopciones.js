
const filas = document.querySelectorAll('.fila-clickeable');

filas.forEach(fila => {
    fila.addEventListener('click', () => {
      const idCompleto = fila.id; // Obtiene el string 'fila-123'
      const id = idCompleto.substring(5); // Extrae '123' a partir de la 5ta posición
            
      window.location.href = `/adopcion/${id}`;
    });
});



// #########################################################################################

//Botón de portada
const goToPortada = () => {
    window.location.href = PORTADA_URL
}

let portadabtn = document.getElementById("btn-portada");
portadabtn.addEventListener("click", goToPortada)