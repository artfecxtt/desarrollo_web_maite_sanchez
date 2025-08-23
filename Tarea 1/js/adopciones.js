const filas = {
  "primera-fila": "1ra-fila",
  "segunda-fila": "2da-fila",
  "tercera-fila": "3ra-fila",
  "cuarta-fila": "4ta-fila",
  "quinta-fila": "5ta-fila"
};


for (let id in filas) {
  let fila = document.getElementById(id);
  if (fila) {
    fila.addEventListener("click", () => {
      window.location.href = `../html/html-adopciones/${filas[id]}.html`;
    });
  }
}
