package tarea4.tarea4.services;

import org.springframework.stereotype.Service;
import tarea4.tarea4.models.AvisoAdopcion;
import tarea4.tarea4.models.AvisoAdopcionRepository;
import tarea4.tarea4.models.Nota;
import tarea4.tarea4.models.NotaRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AppService {
    
    private final AvisoAdopcionRepository avisoRepository;
    private final NotaRepository notaRepository;

    public AppService(AvisoAdopcionRepository avisoRepository, NotaRepository notaRepository) {
        this.avisoRepository = avisoRepository;
        this.notaRepository = notaRepository;
    }

    public List<AvisoAdopcion> obtenerAvisosParaPagina() {
        return avisoRepository.findAll();
    }

    public Map<Long, Double> obtenerPromediosPorAviso() {
    List<AvisoAdopcion> avisos = avisoRepository.findAll();
    Map<Long, Double> promedios = new HashMap<>();
    
    for (AvisoAdopcion aviso : avisos) {
        List<Nota> notas = notaRepository.findByAvisoAdopcionId(aviso.getId());
        Double promedio = 0.0;
        
        if (!notas.isEmpty()) {
            double suma = 0.0;
            for (Nota nota : notas) suma += nota.getNota();
            promedio = suma / notas.size();
        }
        
        promedios.put(aviso.getId(), promedio);
    }
    return promedios;
}
}
