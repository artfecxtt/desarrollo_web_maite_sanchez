package tarea4.tarea4.services;

import java.util.List;
import org.springframework.stereotype.Service;

import tarea4.tarea4.models.Nota;
import tarea4.tarea4.models.NotaRepository;
import tarea4.tarea4.models.AvisoAdopcion;
import tarea4.tarea4.models.AvisoAdopcionRepository;

@Service
public class ApiService {
    
    private final AvisoAdopcionRepository avisoRepository;
    private final NotaRepository notaRepository;

    public ApiService(AvisoAdopcionRepository avisoRepository, NotaRepository notaRepository) {
        this.avisoRepository = avisoRepository;
        this.notaRepository = notaRepository;
    }

    public List<AvisoAdopcion> obtenerTodosLosAvisos() {
        return avisoRepository.findAll();
    }

    public AvisoAdopcion obtenerAvisoPorId(Long id) {
        return avisoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Aviso no encontrado"));
    }

    public Nota agregarNota(Long avisoId, Integer valorNota) {
        AvisoAdopcion aviso = obtenerAvisoPorId(avisoId);
        
        if (!Nota.validateNota(valorNota)) {
            throw new RuntimeException("Nota inválida");
        }
        
        Nota nota = new Nota(aviso, valorNota);
        return notaRepository.save(nota);
    }

    public List<Nota> obtenerNotasPorAviso(Long avisoId) {
        return notaRepository.findByAvisoAdopcionId(avisoId);
    }

    public Double obtenerPromedioNotas(Long avisoId) {
        List<Nota> notas = obtenerNotasPorAviso(avisoId);
        if (notas.isEmpty()) return 0.0;
        
        Integer tam = notas.size();
        Integer suma = 0;
        for(Nota nota : notas){
            suma += nota.getNota();
        }

        Double res = (double) suma/tam;

        return res;
    }
}
