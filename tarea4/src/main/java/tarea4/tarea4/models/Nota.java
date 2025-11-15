package tarea4.tarea4.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "nota")
public class Nota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@SequenceGenerator(
        //name = "confession_sequence",
        //sequenceName = "confession_sequence",
        //allocationSize = 1
    //)
    //@GeneratedValue(
        //strategy = GenerationType.SEQUENCE,
        //generator = "confession_sequence"
    //)
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "aviso_id", nullable = false)
    private AvisoAdopcion avisoAdopcion;

    @NotNull
    private Integer nota;

    public Nota() {

    }

    public Nota(AvisoAdopcion avisoAdopcion, Integer nota) {
        this.avisoAdopcion = avisoAdopcion;
        this.nota = nota;
    }

    public Long getId(){
        return id;
    }   

    public AvisoAdopcion getAvisoAdopcion(){
        return avisoAdopcion;
    }

    public Integer getNota() {
        return nota;
    }

    public static Boolean validateNota(Integer nota) {
        return (nota >= 1) && (nota<=7) && (nota!=null);
    }
    
}
