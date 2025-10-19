//botón de portada
const goToPortada = () => {
    window.location.href = PORTADA_URL
}

let portadabtn = document.getElementById("btn-portada");
portadabtn.addEventListener("click", goToPortada)

// #########################################################################################

// lista d comunas por región
let region_comuna = {
    "regiones": [
        {
        "numero": 1, "nombre": "Región de Tarapacá",
        "comunas": [{"id": 10301, "nombre": "Camiña"}, {"id": 10302, "nombre": "Huara"}, {"id": 10303, "nombre": "Pozo Almonte"}, {"id": 10304, "nombre": "Iquique"}, {"id": 10305, "nombre": "Pica"}, {"id": 10306, "nombre": "Colchane"}, {"id": 10307, "nombre": "Alto Hospicio"}]
        },
        {
        "numero": 2, "nombre": "Región de Antofagasta",
        "comunas": [{"id": 20101, "nombre": "Tocopilla"}, {"id": 20102, "nombre": "Maria Elena"}, {"id": 20201, "nombre": "Ollague"}, {"id": 20202, "nombre": "Calama"}, {"id": 20203, "nombre": "San Pedro Atacama"}, {"id": 20301, "nombre": "Sierra Gorda"}, {"id": 20302, "nombre": "Mejillones"}, {"id": 20303, "nombre": "Antofagasta"}, {"id": 20304, "nombre": "Taltal"}]
        },
        {
        "numero": 3, "nombre": "Región de Atacama",
        "comunas": [{"id": 30101, "nombre": "Diego de Almagro"}, {"id": 30102, "nombre": "Chañaral"}, {"id": 30201, "nombre": "Caldera"}, {"id": 30202, "nombre": "Copiapo"}, {"id": 30203, "nombre": "Tierra Amarilla"}, {"id": 30301, "nombre": "Huasco"}, {"id": 30302, "nombre": "Freirina"}, {"id": 30303, "nombre": "Vallenar"}, {"id": 30304, "nombre": "Alto del Carmen"}]
        },
        {
        "numero": 4, "nombre": "Región de Coquimbo ",
        "comunas": [{"id": 40101, "nombre": "La Higuera"}, {"id": 40102, "nombre": "La Serena"}, {"id": 40103, "nombre": "Vicuña"}, {"id": 40104, "nombre": "Paihuano"}, {"id": 40105, "nombre": "Coquimbo"}, {"id": 40106, "nombre": "Andacollo"}, {"id": 40201, "nombre": "Rio Hurtado"}, {"id": 40202, "nombre": "Ovalle"}, {"id": 40203, "nombre": "Monte Patria"}, {"id": 40204, "nombre": "Punitaqui"}, {"id": 40205, "nombre": "Combarbala"}, {"id": 40301, "nombre": "Mincha"}, {"id": 40302, "nombre": "Illapel"}, {"id": 40303, "nombre": "Salamanca"}, {"id": 40304, "nombre": "Los Vilos"}]
        },
        {
        "numero": 5, "nombre": "Región de Valparaíso",
        "comunas": [{"id": 50101, "nombre": "Petorca"}, {"id": 50102, "nombre": "Cabildo"}, {"id": 50103, "nombre": "Papudo"}, {"id": 50104, "nombre": "La Ligua"}, {"id": 50105, "nombre": "Zapallar"}, {"id": 50201, "nombre": "Putaendo"}, {"id": 50202, "nombre": "Santa Maria"}, {"id": 50203, "nombre": "San Felipe"}, {"id": 50204, "nombre": "Pencahue"}, {"id": 50205, "nombre": "Catemu"}, {"id": 50206, "nombre": "Llay Llay"}, {"id": 50301, "nombre": "Nogales"}, {"id": 50302, "nombre": "La Calera"}, {"id": 50303, "nombre": "Hijuelas"}, {"id": 50304, "nombre": "La Cruz"}, {"id": 50305, "nombre": "Quillota"}, {"id": 50306, "nombre": "Olmue"}, {"id": 50307, "nombre": "Limache"}, {"id": 50401, "nombre": "Los Andes"}, {"id": 50402, "nombre": "Rinconada"}, {"id": 50403, "nombre": "Calle Larga"}, {"id": 50404, "nombre": "San Esteban"}, {"id": 50501, "nombre": "Puchuncavi"}, {"id": 50502, "nombre": "Quintero"}, {"id": 50503, "nombre": "Viña del Mar"}, {"id": 50504, "nombre": "Villa Alemana"}, {"id": 50505, "nombre": "Quilpue"}, {"id": 50506, "nombre": "Valparaiso"}, {"id": 50507, "nombre": "Juan Fernandez"}, {"id": 50508, "nombre": "Casablanca"}, {"id": 50509, "nombre": "Concon"}, {"id": 50601, "nombre": "Isla de Pascua"}, {"id": 50701, "nombre": "Algarrobo"}, {"id": 50702, "nombre": "El Quisco"}, {"id": 50703, "nombre": "El Tabo"}, {"id": 50704, "nombre": "Cartagena"}, {"id": 50705, "nombre": "San Antonio"}, {"id": 50706, "nombre": "Santo Domingo"}]
        },
        {
        "numero": 6, "nombre": "Región del Libertador Bernardo Ohiggins",
        "comunas": [{"id": 60101, "nombre": "Mostazal"}, {"id": 60102, "nombre": "Codegua"}, {"id": 60103, "nombre": "Graneros"}, {"id": 60104, "nombre": "Machali"}, {"id": 60105, "nombre": "Rancagua"}, {"id": 60106, "nombre": "Olivar"}, {"id": 60107, "nombre": "Doñihue"}, {"id": 60108, "nombre": "Requinoa"}, {"id": 60109, "nombre": "Coinco"}, {"id": 60110, "nombre": "Coltauco"}, {"id": 60111, "nombre": "Quinta Tilcoco"}, {"id": 60112, "nombre": "Las Cabras"}, {"id": 60113, "nombre": "Rengo"}, {"id": 60114, "nombre": "Peumo"}, {"id": 60115, "nombre": "Pichidegua"}, {"id": 60116, "nombre": "Malloa"}, {"id": 60117, "nombre": "San Vicente"}, {"id": 60201, "nombre": "Navidad"}, {"id": 60202, "nombre": "La Estrella"}, {"id": 60203, "nombre": "Marchigue"}, {"id": 60204, "nombre": "Pichilemu"}, {"id": 60205, "nombre": "Litueche"}, {"id": 60206, "nombre": "Paredones"}, {"id": 60301, "nombre": "San Fernando"}, {"id": 60302, "nombre": "Peralillo"}, {"id": 60303, "nombre": "Placilla"}, {"id": 60304, "nombre": "Chimbarongo"}, {"id": 60305, "nombre": "Palmilla"}, {"id": 60306, "nombre": "Nancagua"}, {"id": 60307, "nombre": "Santa Cruz"}, {"id": 60308, "nombre": "Pumanque"}, {"id": 60309, "nombre": "Chepica"}, {"id": 60310, "nombre": "Lolol"}]
        },
        {
        "numero": 7, "nombre": "Región del Maule",
        "comunas": [{"id": 70101, "nombre": "Teno"}, {"id": 70102, "nombre": "Romeral"}, {"id": 70103, "nombre": "Rauco"}, {"id": 70104, "nombre": "Curico"}, {"id": 70105, "nombre": "Sagrada Familia"}, {"id": 70106, "nombre": "Hualañe"}, {"id": 70107, "nombre": "Vichuquen"}, {"id": 70108, "nombre": "Molina"}, {"id": 70109, "nombre": "Licanten"}, {"id": 70201, "nombre": "Rio Claro"}, {"id": 70202, "nombre": "Curepto"}, {"id": 70203, "nombre": "Pelarco"}, {"id": 70204, "nombre": "Talca"}, {"id": 70205, "nombre": "Pencahue"}, {"id": 70206, "nombre": "San Clemente"}, {"id": 70207, "nombre": "Constitucion"}, {"id": 70208, "nombre": "Maule"}, {"id": 70209, "nombre": "Empedrado"}, {"id": 70210, "nombre": "San Rafael"}, {"id": 70301, "nombre": "San Javier"}, {"id": 70302, "nombre": "Colbun"}, {"id": 70303, "nombre": "Villa Alegre"}, {"id": 70304, "nombre": "Yerbas Buenas"}, {"id": 70305, "nombre": "Linares"}, {"id": 70306, "nombre": "Longavi"}, {"id": 70307, "nombre": "Retiro"}, {"id": 70308, "nombre": "Parral"}, {"id": 70401, "nombre": "Chanco"}, {"id": 70402, "nombre": "Pelluhue"}, {"id": 70403, "nombre": "Cauquenes"}]
        },
        {
        "numero": 8, "nombre": "Región del Biobío",
        "comunas": [{"id": 80201, "nombre": "Tome"}, {"id": 80202, "nombre": "Florida"}, {"id": 80203, "nombre": "Penco"}, {"id": 80204, "nombre": "Talcahuano"}, {"id": 80205, "nombre": "Concepcion"}, {"id": 80206, "nombre": "Hualqui"}, {"id": 80207, "nombre": "Coronel"}, {"id": 80208, "nombre": "Lota"}, {"id": 80209, "nombre": "Santa Juana"}, {"id": 80210, "nombre": "Chiguayante"}, {"id": 80211, "nombre": "San Pedro de la Paz"}, {"id": 80212, "nombre": "Hualpen"}, {"id": 80301, "nombre": "Cabrero"}, {"id": 80302, "nombre": "Yumbel"}, {"id": 80303, "nombre": "Tucapel"}, {"id": 80304, "nombre": "Antuco"}, {"id": 80305, "nombre": "San Rosendo"}, {"id": 80306, "nombre": "Laja"}, {"id": 80307, "nombre": "Quilleco"}, {"id": 80308, "nombre": "Los Angeles"}, {"id": 80309, "nombre": "Nacimiento"}, {"id": 80310, "nombre": "Negrete"}, {"id": 80311, "nombre": "Santa Barbara"}, {"id": 80312, "nombre": "Quilaco"}, {"id": 80313, "nombre": "Mulchen"}, {"id": 80314, "nombre": "Alto Bio Bio"}, {"id": 80401, "nombre": "Arauco"}, {"id": 80402, "nombre": "Curanilahue"}, {"id": 80403, "nombre": "Los Alamos"}, {"id": 80404, "nombre": "Lebu"}, {"id": 80405, "nombre": "Cañete"}, {"id": 80406, "nombre": "Contulmo"}, {"id": 80407, "nombre": "Tirua"}]
        },
        {
        "numero": 9, "nombre": "Región de La Araucanía",
        "comunas": [{"id": 90101, "nombre": "Renaico"}, {"id": 90102, "nombre": "Angol"}, {"id": 90103, "nombre": "Collipulli"}, {"id": 90104, "nombre": "Los Sauces"}, {"id": 90105, "nombre": "Puren"}, {"id": 90106, "nombre": "Ercilla"}, {"id": 90107, "nombre": "Lumaco"}, {"id": 90108, "nombre": "Victoria"}, {"id": 90109, "nombre": "Traiguen"}, {"id": 90110, "nombre": "Curacautin"}, {"id": 90111, "nombre": "Lonquimay"}, {"id": 90201, "nombre": "Perquenco"}, {"id": 90202, "nombre": "Galvarino"}, {"id": 90203, "nombre": "Lautaro"}, {"id": 90204, "nombre": "Vilcun"}, {"id": 90205, "nombre": "Temuco"}, {"id": 90206, "nombre": "Carahue"}, {"id": 90207, "nombre": "Melipeuco"}, {"id": 90208, "nombre": "Nueva Imperial"}, {"id": 90209, "nombre": "Puerto Saavedra"}, {"id": 90210, "nombre": "Cunco"}, {"id": 90211, "nombre": "Freire"}, {"id": 90212, "nombre": "Pitrufquen"}, {"id": 90213, "nombre": "Teodoro Schmidt"}, {"id": 90214, "nombre": "Gorbea"}, {"id": 90215, "nombre": "Pucon"}, {"id": 90216, "nombre": "Villarrica"}, {"id": 90217, "nombre": "Tolten"}, {"id": 90218, "nombre": "Curarrehue"}, {"id": 90219, "nombre": "Loncoche"}, {"id": 90220, "nombre": "Padre Las Casas"}, {"id": 90221, "nombre": "Cholchol"}]
        },
        {
        "numero": 10, "nombre": "Región de Los Lagos",
        "comunas": [{"id": 100201, "nombre": "San Pablo"}, {"id": 100202, "nombre": "San Juan"}, {"id": 100203, "nombre": "Osorno"}, {"id": 100204, "nombre": "Puyehue"}, {"id": 100205, "nombre": "Rio Negro"}, {"id": 100206, "nombre": "Purranque"}, {"id": 100207, "nombre": "Puerto Octay"}, {"id": 100301, "nombre": "Frutillar"}, {"id": 100302, "nombre": "Fresia"}, {"id": 100303, "nombre": "Llanquihue"}, {"id": 100304, "nombre": "Puerto Varas"}, {"id": 100305, "nombre": "Los Muermos"}, {"id": 100306, "nombre": "Puerto Montt"}, {"id": 100307, "nombre": "Maullin"}, {"id": 100308, "nombre": "Calbuco"}, {"id": 100309, "nombre": "Cochamo"}, {"id": 100401, "nombre": "Ancud"}, {"id": 100402, "nombre": "Quemchi"}, {"id": 100403, "nombre": "Dalcahue"}, {"id": 100404, "nombre": "Curaco de Velez"}, {"id": 100405, "nombre": "Castro"}, {"id": 100406, "nombre": "Chonchi"}, {"id": 100407, "nombre": "Queilen"}, {"id": 100408, "nombre": "Quellon"}, {"id": 100409, "nombre": "Quinchao"}, {"id": 100410, "nombre": "Puqueldon"}, {"id": 100501, "nombre": "Chaiten"}, {"id": 100502, "nombre": "Futaleufu"}, {"id": 100503, "nombre": "Palena"}, {"id": 100504, "nombre": "Hualaihue"}]
        },
        {
        "numero": 11, "nombre": "Región Aisén del General Carlos Ibáñez del Campo",
        "comunas": [{"id": 110101, "nombre": "Guaitecas"}, {"id": 110102, "nombre": "Cisnes"}, {"id": 110103, "nombre": "Aysen"}, {"id": 110201, "nombre": "Coyhaique"}, {"id": 110202, "nombre": "Lago Verde"}, {"id": 110301, "nombre": "Rio Ibañez"}, {"id": 110302, "nombre": "Chile Chico"}, {"id": 110401, "nombre": "Cochrane"}, {"id": 110402, "nombre": "Tortel"}, {"id": 110403, "nombre": "O'Higins"}]
        },
        {
        "numero": 12, "nombre": "Región de Magallanes y la Antártica Chilena",
        "comunas": [{"id": 120101, "nombre": "Torres del Paine"}, {"id": 120102, "nombre": "Puerto Natales"}, {"id": 120201, "nombre": "Laguna Blanca"}, {"id": 120202, "nombre": "San Gregorio"}, {"id": 120203, "nombre": "Rio Verde"}, {"id": 120204, "nombre": "Punta Arenas"}, {"id": 120301, "nombre": "Porvenir"}, {"id": 120302, "nombre": "Primavera"}, {"id": 120303, "nombre": "Timaukel"}, {"id": 120401, "nombre": "Antartica"}]
        },
        {
        "numero": 13, "nombre": "Región Metropolitana de Santiago ",
        "comunas": [{"id": 130101, "nombre": "Tiltil"}, {"id": 130102, "nombre": "Colina"}, {"id": 130103, "nombre": "Lampa"}, {"id": 130201, "nombre": "Conchali"}, {"id": 130202, "nombre": "Quilicura"}, {"id": 130203, "nombre": "Renca"}, {"id": 130204, "nombre": "Las Condes"}, {"id": 130205, "nombre": "Pudahuel"}, {"id": 130206, "nombre": "Quinta Normal"}, {"id": 130207, "nombre": "Providencia"}, {"id": 130208, "nombre": "Santiago"}, {"id": 130209, "nombre": "La Reina"}, {"id": 130210, "nombre": "Ñuñoa"}, {"id": 130211, "nombre": "San Miguel"}, {"id": 130212, "nombre": "Maipu"}, {"id": 130213, "nombre": "La Cisterna"}, {"id": 130214, "nombre": "La Florida"}, {"id": 130215, "nombre": "La Granja"}, {"id": 130216, "nombre": "Independencia"}, {"id": 130217, "nombre": "Huechuraba"}, {"id": 130218, "nombre": "Recoleta"}, {"id": 130219, "nombre": "Vitacura"}, {"id": 130220, "nombre": "Lo Barrenechea"}, {"id": 130221, "nombre": "Macul"}, {"id": 130222, "nombre": "Peñalolen"}, {"id": 130223, "nombre": "San Joaquin"}, {"id": 130224, "nombre": "La Pintana"}, {"id": 130225, "nombre": "San Ramon"}, {"id": 130226, "nombre": "El Bosque"}, {"id": 130227, "nombre": "Pedro Aguirre Cerda"}, {"id": 130228, "nombre": "Lo Espejo"}, {"id": 130229, "nombre": "Estacion Central"}, {"id": 130230, "nombre": "Cerrillos"}, {"id": 130231, "nombre": "Lo Prado"}, {"id": 130232, "nombre": "Cerro Navia"}, {"id": 130301, "nombre": "San Jose de Maipo"}, {"id": 130302, "nombre": "Puente Alto"}, {"id": 130303, "nombre": "Pirque"}, {"id": 130401, "nombre": "San Bernardo"}, {"id": 130402, "nombre": "Calera de Tango"}, {"id": 130403, "nombre": "Buin"}, {"id": 130404, "nombre": "Paine"}, {"id": 130501, "nombre": "Peñaflor"}, {"id": 130502, "nombre": "Talagante"}, {"id": 130503, "nombre": "El Monte"}, {"id": 130504, "nombre": "Isla de Maipo"}, {"id": 130601, "nombre": "Curacavi"}, {"id": 130602, "nombre": "Maria Pinto"}, {"id": 130603, "nombre": "Melipilla"}, {"id": 130604, "nombre": "San Pedro"}, {"id": 130605, "nombre": "Alhue"}, {"id": 130606, "nombre": "Padre Hurtado"}]
        },
        {
        "numero": 14, "nombre": "Región de Los Ríos",
        "comunas": [{"id": 100101, "nombre": "Lanco"}, {"id": 100102, "nombre": "Mariquina"}, {"id": 100103, "nombre": "Panguipulli"}, {"id": 100104, "nombre": "Mafil"}, {"id": 100105, "nombre": "Valdivia"}, {"id": 100106, "nombre": "Los Lagos"}, {"id": 100107, "nombre": "Corral"}, {"id": 100108, "nombre": "Paillaco"}, {"id": 100109, "nombre": "Futrono"}, {"id": 100110, "nombre": "Lago Ranco"}, {"id": 100111, "nombre": "La Union"}, {"id": 100112, "nombre": "Rio Bueno"}]
        },
        {
        "numero": 15, "nombre": "Región Arica y Parinacota",
        "comunas": [{"id": 10101, "nombre": "Gral. Lagos"}, {"id": 10102, "nombre": "Putre"}, {"id": 10201, "nombre": "Arica"}, {"id": 10202, "nombre": "Camarones"}]
        },
        {
        "numero": 16, "nombre": "Región del Ñuble",
        "comunas": [{"id": 80101, "nombre": "Cobquecura"}, {"id": 80102, "nombre": "Ñiquen"}, {"id": 80103, "nombre": "San Fabian"}, {"id": 80104, "nombre": "San Carlos"}, {"id": 80105, "nombre": "Quirihue"}, {"id": 80106, "nombre": "Ninhue"}, {"id": 80107, "nombre": "Trehuaco"}, {"id": 80108, "nombre": "San Nicolas"}, {"id": 80109, "nombre": "Coihueco"}, {"id": 80110, "nombre": "Chillan"}, {"id": 80111, "nombre": "Portezuelo"}, {"id": 80112, "nombre": "Pinto"}, {"id": 80113, "nombre": "Coelemu"}, {"id": 80114, "nombre": "Bulnes"}, {"id": 80115, "nombre": "San Ignacio"}, {"id": 80116, "nombre": "Ranquil"}, {"id": 80117, "nombre": "Quillon"}, {"id": 80118, "nombre": "El Carmen"}, {"id": 80119, "nombre": "Pemuco"}, {"id": 80120, "nombre": "Yungay"}, {"id": 80121, "nombre": "Chillan Viejo"}]
        }
    ]
};

const regionSelect = document.getElementById("region");
const comunaSelect = document.getElementById("comuna");

//crea un nuevo option con la comuna q corresponda
const agregarComuna = (comuna) =>{
    const option = document.createElement("option");
    option.value = comuna.id;

    option.textContent = comuna.nombre;

    comunaSelect.appendChild(option)
}

//cambia las comunas cuando se cambia la región
const changeComuna = () =>{
    const numeroRegion = regionSelect.value

    //si se cambia la región, se limpia la comuna
    comunaSelect.innerHTML = '<option value="">-- Selecciona una comuna --</option>';

    const regionSeleccionada = region_comuna.regiones.find(r => r.numero == numeroRegion)

    if (regionSeleccionada) {
        for(let comuna of regionSeleccionada.comunas){
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
    const validadorSector = (sector) => (sector.length <= 100);

    const validadorName = (name) => name && (name.trim().length >= 3) && (name.trim().length <= 200);
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
            return metodo.trim().length >=4 && metodo.trim().length <= 50
        } else {
            return true
        }
    }

    const validadorTipo = (tipo) => tipo !== "";
    const validadorCantidad = (cantidad) => {
        const numero = Number(cantidad);
        if (isNaN(numero) || numero < 1 || !Number.isInteger(numero)){
            return false && cantidad;
        }else{
            return true && cantidad;
        }
    }
    const validadorEdad = (edad) => {
        const numero = Number(edad);
        if (isNaN(numero) || numero < 1 || !Number.isInteger(numero)){
            return false && edad;
        }else{
            return true && edad;
        }
    }
    const validadorUnidad = (unidad) => unidad !== ""

    const validadorFecha = (fecha) => fecha >= fechaBonita

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
    let filesInput = document.getElementById("fotos");

    if(!validadorRegion(regionInput.value)){
        msg += "- Debe seleccionar una región. <br>"
        regionInput.style.borderColor = "red";
    }else{
        regionInput.style.borderColor = "";
    }

    if(!validadorComuna(comunaInput.value)){
        msg += "- Debe seleccionar una comuna. <br>"
        comunaInput.style.borderColor = "red";
    }else{
        comunaInput.style.borderColor = "";
    }

    if(!validadorSector(sectorInput.value)){
        msg += "- Sector inválido (debe tener como máximo 100 caracteres. <br>"
        sectorInput.style.borderColor = "red";
    }else{
        sectorInput.style.borderColor = "";
    }

    if(!validadorName(nombreInput.value)){
        msg += "- Nombre inválido (debe tener entre 3 y 200 caracteres). <br>"
        nombreInput.style.borderColor = "red";
    }else{
        nombreInput.style.borderColor = "";
    }


    if (!validadorEmail(emailInput.value)) {
        msg += "- Email inválido o demasiado largo (máx 100 caracteres). <br>";
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "";
    }

    if (!validadorCelular(celularInput.value)) {
        msg += "- Celular inválido. Formato esperado: +XXX.XXXXXXXX. <br>";
        celularInput.style.borderColor = "red";
    } else {
        celularInput.style.borderColor = "";
    }

    if (!validadorContacto(contactoInput.value, metodoInput.value)){
        msg += "- ID o URL inválida (debe tener entre 4 y 50 caracteres). <br>";
        metodoInput.style.borderColor = "red";
    } else {
        metodoInput.style.borderColor = "";
    }

    let cont2Input = document.getElementById("contacto2")
    let cont3Input = document.getElementById("contacto3")
    let cont4Input = document.getElementById("contacto4")
    let cont5Input = document.getElementById("contacto5")

    let metodo2 = document.getElementById("metodo-contacto2")
    let metodo3 = document.getElementById("metodo-contacto3")
    let metodo4 = document.getElementById("metodo-contacto4")
    let metodo5 = document.getElementById("metodo-contacto5")

    if (!validadorContacto(cont2Input.value, metodo2.value)){
        msg += "- ID o URL inválida (debe tener entre 4 y 50 caracteres). <br>";
        metodo2.style.borderColor = "red";
    } else {
        metodo2.style.borderColor = "";
    }

    if (!validadorContacto(cont3Input.value, metodo3.value)){
        msg += "- ID o URL inválida (debe tener entre 4 y 50 caracteres). <br>";
        metodo3.style.borderColor = "red";
    } else {
        metodo3.style.borderColor = "";
    }

    if (!validadorContacto(cont4Input.value, metodo4.value)){
        msg += "- ID o URL inválida (debe tener entre 4 y 50 caracteres). <br>";
        metodo4.style.borderColor = "red";
    } else {
        metodo4.style.borderColor = "";
    }

    if (!validadorContacto(cont5Input.value, metodo5.value)){
        msg += "- ID o URL inválida (debe tener entre 4 y 50 caracteres). <br>";
        metodo5.style.borderColor = "red";
    } else {
        metodo5.style.borderColor = "";
    }



    if (!validadorTipo(tipoInput.value)) {
        msg += "- Debe seleccionar un tipo de mascota. <br>";
        tipoInput.style.borderColor = "red";
    } else {
        tipoInput.style.borderColor = "";
    }

    if (!validadorCantidad(cantidadInput.value)) {
        msg += "- Cantidad inválida (debe ser mayor o igual a 1). <br>";
        cantidadInput.style.borderColor = "red";
    } else {
        cantidadInput.style.borderColor = "";
    }

    if (!validadorEdad(edadInput.value)) {
        msg += "- Edad inválida (debe ser un entero y mayor o igual a 1). <br>";
        edadInput.style.borderColor = "red";
    } else {
        edadInput.style.borderColor = "";
    }

    if (!validadorUnidad(unidadInput.value)) {
        msg += "- Debe seleccionar una unidad de edad (debe ser un entero). <br>";
        unidadInput.style.borderColor = "red";
    } else {
        unidadInput.style.borderColor = "";
    }

    if (!validadorFecha(fechahoraInput.value)){
        msg += "- Fecha debe ser mayor a 3 horas desde la hora actual. <br>";
        fechahoraInput.style.borderColor = "red";
    } else {
        fechahoraInput.style.borderColor = "";
    }

    if (!validadorFiles(filesInput)) {
        msg += "- Debe subir entre 1 y 5 archivos. <br>";
        filesInput.style.borderColor = "red";
    } else {
        filesInput.style.borderColor = "";
    }
 
    if (msg !== ""){
        document.getElementById("error-forms").hidden = false
        document.getElementById("error-forms").innerHTML = "Errores en el formulario: <br>" + msg;
        document.documentElement.scrollTop = 0
        return;
    }

    ventEmer.style.display = "flex";
    

}

const vent_si = () => {
    document.getElementById("error-forms").hidden = true
    ventEmer.style.display = "none"
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

// ################################################################

//prerellenado de fecha
const fecha_ahora = new Date();
fecha_ahora.setHours(fecha_ahora.getHours() + 3); // suma 3 horas

const año = fecha_ahora.getFullYear();
const mes = String(fecha_ahora.getMonth() + 1).padStart(2, '0');
const dia = String(fecha_ahora.getDate()).padStart(2, '0');
const horas = String(fecha_ahora.getHours()).padStart(2, '0');
const minutos = String(fecha_ahora.getMinutes()).padStart(2, '0');

const fechaBonita = `${año}-${mes}-${dia}T${horas}:${minutos}`;

const fechahoraInput = document.getElementById("fecha-entrega");
if (fechahoraInput) {
    fechahoraInput.value = fechaBonita; //prerellenado
    fechahoraInput.min = fechaBonita; //que sea la fecha minima
    //en el .min se hace la validación que se pide, impide que se elija algo menor
}

// ################################################################

let btn_cont1 = document.getElementById("btn-cont1");
btn_cont1.addEventListener("click", () => {
    let div_cont2 = document.getElementById("cont2");
    div_cont2.hidden=false
    btn_cont1.hidden=true
})

let btn_cont2 = document.getElementById("btn-cont2");
btn_cont2.addEventListener("click", () => {
    let div_cont3 = document.getElementById("cont3");
    div_cont3.hidden=false
    btn_cont2.hidden=true
})

let btn_cont3 = document.getElementById("btn-cont3");
btn_cont3.addEventListener("click", () => {
    let div_cont4 = document.getElementById("cont4");
    div_cont4.hidden=false
    btn_cont3.hidden=true
})

let btn_cont4 = document.getElementById("btn-cont4");
btn_cont4.addEventListener("click", () => {
    let div_cont5 = document.getElementById("cont5");
    div_cont5.hidden=false
    btn_cont4.hidden=true
})