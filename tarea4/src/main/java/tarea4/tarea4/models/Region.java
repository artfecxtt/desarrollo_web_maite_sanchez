package tarea4.tarea4.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "region")
public class Region {
    
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
    private String nombre;

    public Region() {
    }

    public Region(String nombre) {

        this.nombre = nombre;

    }

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

}
