
const goToPortada = () => {
    window.location.href = PORTADA_URL
}

let portadabtn = document.getElementById("btn-portada");
portadabtn.addEventListener("click", goToPortada)

//###########################################################
//desde aquí hacia abajo va todo lo nuevo de los gráficos
//y cosas de ajax y temas de ese estilo

let procesarDatosLinea = (datos) => {
    const formato_datos = datos.map((item) => {
        const fecha = new Date(item.dia); 
        const fecha_con_formato = fecha.getTime(); 
        
        return [fecha_con_formato, item.cantidad]; 
    });
    
    return formato_datos; 
};

let procesarDatosTorta = (datos) => {
    //console.log("ENTRADA:", datos)

    const formato_datos = [{
        name: "Perros", y: datos.perro, color: '#8FAED9'}, 
        {name: "Gatos", y: datos.gato, color: '#465870' 
    }]

    //console.log("SALIDA:", formato_datos)
    return formato_datos
};

let procesarDatosBarra = (datos) => {
    const datos_meses = []
    const datos_perro = []
    const datos_gato = []

    datos.forEach(element => {
        datos_meses.push(element.mes);
        datos_perro.push(element.perro);
        datos_gato.push(element.gato);
    });

    const formato_datos = {"datos_meses": datos_meses, "datos_perro": datos_perro, "datos_gato": datos_gato}

    return formato_datos
}

let crearGraficoLinea = (datos) => {
    const datitos = procesarDatosLinea(datos);

    Highcharts.chart('grafico_linea', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Cantidad de avisos por día'
        },
        xAxis: {
            type:'datetime', 
            title: {
                text: 'Día'
            }
        }, 
        yAxis: {
            title: {
                text: 'Cantidad de Avisos'
            }, 
            min: 0
        },
        series: [{
            name: 'Cantidad de avisos por día', 
            data: datitos, 
            color: '#465870'
        }]
    })

}

let crearGraficoTorta = (datos) => {
    const datitos = procesarDatosTorta(datos);

    Highcharts.chart('grafico_torta', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Avisos por tipo de mascota'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Avisos por tipo de mascota', 
            data: datitos
        }]
    })
}

let crearGraficoBarra = (datos) => {
    const datitos = procesarDatosBarra(datos);

    Highcharts.chart('grafico_barra', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Cantidad de avisos mensuales por tipo de mascota'
        },
        xAxis: {
            categories: datitos.datos_meses,
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cantidad de avisos por tipo de mascota'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Perros', 
            data: datitos.datos_perro, 
            color: '#8FAED9'
        }, 
        { 
            name: 'Gatos', 
            data: datitos.datos_gato, 
            color: '#465870'}]
    });
}

let fetchAJAX = () => {
    const ENDPOINT = "/get-estadisticas";

    fetch(ENDPOINT)
        .then((response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }))
        .then((ajaxResponse) => {
            const datos = ajaxResponse.data;

            crearGraficoLinea(datos.g_linea);
            crearGraficoTorta(datos.g_torta);
            crearGraficoBarra(datos.g_barra);
        })
        .catch((error) => {
            console.error(
                "There has been an error with your fetch operation:", 
                error
            );
        })
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === '/estadisticas') {
        fetchAJAX(); 
    }
});