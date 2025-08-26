//Botón de portada
const goToPortada = () => {
    window.location.href = "../html/portada.html"
}

let portadabtn = document.getElementById("btn-portada");
portadabtn.addEventListener("click", goToPortada)

// #########################################################################################

// lista d comunas por región
const comunasPorRegion = {
    arica_parinacota: ["Arica","Camarones","Putre","General Lagos"],

    tarapaca: ["Iquique","Alto Hospicio","Pozo Almonte","Camiña","Colchane","Huara","Pica"],

    antofagasta: ["Antofagasta","Mejillones","Sierra Gorda","Taltal","Calama","Ollagüe","San Pedro de Atacama",
        "Tocopilla","María Elena"],

    atacama: ["Copiapó","Caldera","Tierra Amarilla","Chañaral","Diego de Almagro","Vallenar","Alto del Carmen",
        "Freirina","Huasco"],

    coquimbo: ["La Serena","Coquimbo","Andacollo","La Higuera","Paiguano","Vicuña","Illapel","Canela","Los Vilos",
        "Salamanca","Ovalle","Combarbalá","Monte Patria","Punitaqui","Río Hurtado"],

    valparaiso: ["Valparaíso","Casablanca","Concón","Juan Fernández","Puchuncaví","Quintero","Viña del Mar","Isla de Pascua",
        "Los Andes","Calle Larga","Rinconada","San Esteban","La Ligua","Cabildo","Papudo","Petorca","Zapallar","Quillota",
        "Calera","Hijuelas","La Cruz","Nogales","San Antonio","Algarrobo","Cartagena","El Quisco","El Tabo","Santo Domingo",
        "San Felipe","Catemu","Llay Llay","Panquehue","Putaendo","Santa María","Quilpué","Limache","Olmué","Villa Alemana"],

    metropolitana: ["Santiago","Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba",
        "Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea",
        "Lo Espejo","Lo Prado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel",
        "Quilicura","Quinta Normal","Recoleta","Renca","San Joaquín","San Miguel","San Ramón","Vitacura","Puente Alto",
        "Pirque","San José de Maipo","Colina","Lampa","Tiltil","San Bernardo","Buin","Calera de Tango","Paine","Melipilla",
        "Alhué","Curacaví","María Pinto","San Pedro","Talagante","El Monte","Isla de Maipo","Padre Hurtado","Peñaflor"],

    ohiggins: ["Rancagua","Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machalí","Malloa","Mostazal",
        "Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rengo","Requínoa","San Vicente","Pichilemu","La Estrella",
        "Litueche","Marchigüe","Navidad","Paredones","San Fernando","Chépica","Chimbarongo","Lolol","Nancagua","Palmilla",
        "Peralillo","Placilla","Pumanque","Santa Cruz"],

    maule: ["Talca","Constitución","Curepto","Empedrado","Maule","Pelarco","Pencahue","Río Claro","San Clemente",
        "San Rafael","Cauquenes","Chanco","Pelluhue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral",
        "Sagrada Familia","Teno","Vichuquén","Linares","Colbún","Longaví","Parral","Retiro","San Javier","Villa Alegre",
        "Yerbas Buenas"],

    nuble: ["Chillán","Chillán Viejo","Cobquecura","Coelemu","Ninhue","Portezuelo","Quirihue","Ránquil","Treguaco",
        "Bulnes","Quillón","San Ignacio","El Carmen","Pemuco","Yungay","San Carlos","Ñiquén","San Fabián","San Nicolás",
        "Coihueco"],

    biobio: ["Concepción","Coronel","Chiguayante","Florida","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana",
        "Talcahuano","Tomé","Hualpén","Lebu","Arauco","Cañete","Contulmo","Curanilahue","Los Álamos","Tirúa","Los Ángeles",
        "Antuco","Cabrero","Laja","Mulchén","Nacimiento","Negrete","Quilaco","Quilleco","San Rosendo","Santa Bárbara",
        "Tucapel","Yumbel","Alto Biobío"],

    araucania: ["Temuco","Carahue","Cunco","Curarrehue","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco",
        "Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén",
        "Vilcún","Villarrica","Cholchol","Angol","Collipulli","Curacautín","Ercilla","Lonquimay","Los Sauces","Lumaco",
        "Purén","Renaico","Traiguén","Victoria"],

    los_rios: ["Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","La Unión",
        "Futrono","Lago Ranco","Río Bueno"],

    los_lagos: ["Puerto Montt","Calbuco","Cochamó","Fresia","Frutillar","Llanquihue","Los Muermos","Maullín","Puerto Varas",
        "Castro","Ancud","Chonchi","Curaco de Vélez","Dalcahue","Puqueldón","Queilén","Quellón","Quemchi","Quinchao",
        "Osorno","Puerto Octay","Purranque","Puyehue","Río Negro","San Juan de la Costa","San Pablo","Chaitén",
        "Futaleufú","Hualaihué","Palena"],

    aysen: ["Coyhaique","Lago Verde","Aysén","Cisnes","Guaitecas","Cochrane","O’Higgins","Tortel","Chile Chico",
        "Río Ibáñez"],

    magallanes: ["Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Cabo de Hornos","Antártica","Porvenir",
        "Primavera","Timaukel","Natales","Torres del Paine"]
};

const regionSelect = document.getElementById("region");
const comunaSelect = document.getElementById("comuna");

//crea un nuevo option con la comuna q corresponda
const agregarComuna = (comuna) =>{
    const option = document.createElement("option");
    const valueBonito = comuna.toLowerCase().replace(/\s+/g, "-");
    option.value = valueBonito;

    option.textContent = comuna;

    comunaSelect.appendChild(option)
}

//cambia las comunas cuando se cambia la región
const changeComuna = () =>{
    const regionSeleccionada = regionSelect.value

    //si se cambia la región, se limpia la comuna
    comunaSelect.innerHTML = '<option value="">-- Selecciona una comuna --</option>';

    if (regionSeleccionada && comunasPorRegion[regionSeleccionada]) {
        for(let comuna of comunasPorRegion[regionSeleccionada]){
            agregarComuna(comuna)
        }
    }

}

regionSelect.addEventListener("change", changeComuna)

// #########################################################################################



// VALIDACIONES ############################################################################

const ventEmer = document.getElementById("vent-emergente");

const validarForm = () => {
    // VALIDACIONES POR INPUT (se les entrega el variable.value menos en files)
    const validadorRegion = (region) => region !== "";
    const validadorComuna = (comuna) => comuna !== "";
    const validadorSector = (sector) => sector && (sector.length <= 100);

    const validadorName = (name) => name && (name.length >= 3) && (name.length <= 200);
    const validadorEmail = (email) => {
        const expreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email && email.length <= 100 && expreg.test(email);
    }
    const validadorCelular = (celular) => {
        const expreg = /^\+\d{3}\.\d{8,10}$/;
        return expreg.test(celular);
    }

    const validadorContacto = (contacto, metodo) => {
        if(contacto !== ""){
            return metodo.length >=4 && metodo.length <= 50
        } else {
            return true
        }
    }

    const validadorTipo = (tipo) => tipo !== "";
    const validadorCantidad = (cantidad) => {
        const numero = Number(cantidad);
        if (isNaN(numero) || numero < 1){
            return false && cantidad;
        }else{
            return true && cantidad;
        }
    }
    const validadorEdad = (edad) => {
        const numero = Number(edad);
        if (isNaN(numero) || numero < 1){
            return false && edad;
        }else{
            return true && edad;
        }
    }
    const validadorUnidad = (unidad) => unidad !== ""

    // const validadorFecha = (fecha) => {}

    const validadorFiles = (archivos) => archivos.files.length >= 1 && archivos.files.length <= 5;

    //AHORA, el real validador
    let isValid = false;
    let msg = "";

    let regionInput = document.getElementById("region");
    let comunaInput = document.getElementById("comuna");
    let sectorInput = document.getElementById("sector");
    let nombreInput = document.getElementById("nombre");
    let emailInput = document.getElementById("email");
    let celularInput = document.getElementById("nro-celular");
    let contactoInput = document.getElementById("contacto");
    let metodoInput = document.getElementById("metodo-contacto");
    let tipoInput = document.getElementById("tipo-mascota");
    let cantidadInput = document.getElementById("cantidad");
    let edadInput = document.getElementById("edad-animal");
    let unidadInput = document.getElementById("unidad-edad");
    let fechaInput = document.getElementById("fecha-entrega");
    let filesInput = document.getElementById("fotos");

    if(!validadorRegion(regionInput.value)){
        msg += "Debe seleccionar una región\n"
        regionInput.style.borderColor = "red";
    }else{
        regionInput.style.borderColor = "";
    }

    if(!validadorComuna(comunaInput.value)){
        msg += "Debe seleccionar una comuna\n"
        comunaInput.style.borderColor = "red";
    }else{
        comunaInput.style.borderColor = "";
    }

    if(!validadorSector(sectorInput.value)){
        msg += "Sector inválido (debe tener como máximo 100 caracteres\n"
        sectorInput.style.borderColor = "red";
    }else{
        sectorInput.style.borderColor = "";
    }

    if(!validadorName(nombreInput.value)){
        msg += "Nombre inválido (debe tener entre 3 y 200 caracteres).\n"
        nombreInput.style.borderColor = "red";
    }else{
        nombreInput.style.borderColor = "";
    }


    if (!validadorEmail(emailInput.value)) {
        msg += "Email inválido o demasiado largo (máx 100 caracteres).\n";
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "";
    }

    if (!validadorCelular(celularInput.value)) {
        msg += "Celular inválido. Formato esperado: +XXX.XXXXXXXX.\n";
        celularInput.style.borderColor = "red";
    } else {
        celularInput.style.borderColor = "";
    }

    if (!validadorContacto(contactoInput.value, metodoInput.value)){
        msg += "ID o URL inválida (debe tener entre 4 y 50 caracteres)\n";
        metodoInput.style.borderColor = "red";
    } else {
        metodoInput.style.borderColor = "";
    }

    if (!validadorTipo(tipoInput.value)) {
        msg += "Debe seleccionar un tipo de mascota.\n";
        tipoInput.style.borderColor = "red";
    } else {
        tipoInput.style.borderColor = "";
    }

    if (!validadorCantidad(cantidadInput.value)) {
        msg += "Cantidad inválida (debe ser mayor o igual a 1).\n";
        cantidadInput.style.borderColor = "red";
    } else {
        cantidadInput.style.borderColor = "";
    }

    if (!validadorEdad(edadInput.value)) {
        msg += "Edad inválida (debe ser mayor o igual a 1).\n";
        edadInput.style.borderColor = "red";
    } else {
        edadInput.style.borderColor = "";
    }

    if (!validadorUnidad(unidadInput.value)) {
        msg += "Debe seleccionar una unidad de edad.\n";
        unidadInput.style.borderColor = "red";
    } else {
        unidadInput.style.borderColor = "";
    }

    // if (!validadorFecha(fecha)){}

    if (!validadorFiles(filesInput)) {
        msg += "Debe subir entre 1 y 5 archivos.\n";
        filesInput.style.borderColor = "red";
    } else {
        filesInput.style.borderColor = "";
    }
 
    if (msg !== ""){
        alert("Errores en el formulario: \n" + msg);
        return;
    }

    ventEmer.style.display = "flex";
    

}

const vent_si = () => {
    ventEmer.style.display = "none"
    alert("Hemos recibido la información de adopción, muchas gracias y suerte!")
    document.getElementById("btn-portada").hidden = false;
}

const vent_no = () => {
    ventEmer.style.display = "none"
}

const metodo_contacto = () => {
    document.getElementById("metodo-cont").hidden = false;
}

let sibtn = document.getElementById("btnSi");
sibtn.addEventListener("click", vent_si)

let nobtn = document.getElementById("btnNo");
nobtn.addEventListener("click", vent_no)

let enviarbtn = document.getElementById("btn-enviar");
enviarbtn.addEventListener("click", validarForm)

let contactoInput = document.getElementById("contacto");
contactoInput.addEventListener("change", metodo_contacto)