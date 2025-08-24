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


