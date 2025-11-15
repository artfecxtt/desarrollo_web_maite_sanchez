const validadorNota = (nota) => {
    const notaNum = parseFloat(nota);
    return (notaNum>=1) && (notaNum<=7) && notaNum && Number.isInteger(notaNum);
}

const mostrarFormulario = (aviso_id) => {
    document.getElementById('form-nota-' + aviso_id).style.display = 'flex';
}

const alertContainer = document.getElementById("alerts")

const agregarNota = (avisoId) => {

    alertContainer.textContent=''

    const inputNota = document.getElementById('input-nota-' + avisoId);
    const nota = inputNota.value;
    
    if (!validadorNota(nota)) {
        alertContainer.innerHTML = 'Nota tiene que ser un entero entre 1 y 7'
        return;
    }
    
    fetch('/avisos/' + avisoId + '/notas', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nota: parseInt(nota)})
    })
    .then(response => {
        if (!response.ok) throw new Error('Error al guardar nota');
        inputNota.value = '';
        return fetch('/avisos/' + avisoId + '/promedio');
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('promedio-' + avisoId).textContent = 
            data.promedio.toFixed(1);
        alertContainer.textContent = 'Nota agregada correctamente'
        const brElement = document.createElement("br");
        alertContainer.append(brElement)
    })
    .catch(error => {
        alertContainer.textContent = 'Error:' + error.message
        const brElement = document.createElement("br");
        alertContainer.append(brElement)
    });
}