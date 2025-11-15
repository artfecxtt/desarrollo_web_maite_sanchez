package tarea4.tarea4.controllers;

import org.springframework.web.bind.annotation.*;
import tarea4.tarea4.models.AvisoAdopcion;
import tarea4.tarea4.models.Nota;
import tarea4.tarea4.services.ApiService;

import java.util.List;
import java.util.Map;

@RestController
public class ApiController {
    
    private final ApiService apiService;
    
    public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/avisos")
    public List<AvisoAdopcion> obtenerTodosLosAvisos() {
        return apiService.obtenerTodosLosAvisos();
    }


    @PostMapping("/avisos/{avisoId}/notas")
    public Nota agregarNota(@PathVariable Long avisoId, @RequestBody Map<String, Integer> request) {
        Integer nota = request.get("nota");
        return apiService.agregarNota(avisoId, nota);
    }

    @GetMapping("/avisos/{avisoId}/promedio")
    public Map<String, Double> obtenerPromedio(@PathVariable Long avisoId) {
        Double promedio = apiService.obtenerPromedioNotas(avisoId);
        return Map.of("promedio", promedio);
    }

}
