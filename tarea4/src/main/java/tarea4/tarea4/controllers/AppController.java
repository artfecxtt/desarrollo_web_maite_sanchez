package tarea4.tarea4.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tarea4.tarea4.models.AvisoAdopcion;
import tarea4.tarea4.services.AppService;

import java.util.List;
import java.util.Map;

@Controller
public class AppController {
    private final AppService appService;
    
    public AppController(AppService appService) {
        this.appService = appService;
    }
    
    @GetMapping("/")
    public String paginaPrincipal(Model model) {
        List<AvisoAdopcion> avisos = appService.obtenerAvisosParaPagina();
        Map<Long, Double> promedios = appService.obtenerPromediosPorAviso();
        
        model.addAttribute("avisos", avisos);
        model.addAttribute("promedios", promedios);
        
        return "evaluaciones";
    }

}
