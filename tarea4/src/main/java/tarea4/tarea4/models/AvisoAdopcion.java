package tarea4.tarea4.models;

import java.time.LocalDateTime;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotNull;
import jakarta.persistence.*;

@Entity
@Table(name = "aviso_adopcion")
public class AvisoAdopcion {
    
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

    @PrePersist
    protected void onCreate() {
        if (fecha_ingreso == null) {
            fecha_ingreso = LocalDateTime.now();
        }
    }

    @NotNull
    private LocalDateTime fecha_ingreso;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "comuna_id", nullable = false)
    private Comuna comuna;

    private String sector;

    @NotNull
    private String nombre;

    @NotNull
    private String email;

    private String celular;


    @Enumerated(EnumType.STRING)
    @NotNull
    private TipoMascota tipo;

    @NotNull
    private Integer cantidad;

    @NotNull
    private Integer edad;

    @Enumerated(EnumType.STRING)
    @NotNull
    private UnidadMedida unidad_medida;

    @NotNull
    private LocalDateTime fecha_entrega;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    public AvisoAdopcion(){

    }

    public AvisoAdopcion(Comuna comuna, String sector, 
        String nombre, String email, String celular, 
        TipoMascota tipo, Integer cantidad, Integer edad, 
        UnidadMedida unidad_medida, LocalDateTime fecha_entrega, 
        String descripcion){

            this.comuna = comuna;
            this.sector = sector;
            this.nombre = nombre;
            this.email = email;
            this.celular = celular;
            this.tipo = tipo;
            this.cantidad = cantidad;
            this.edad = edad;
            this.unidad_medida = unidad_medida;
            this.fecha_entrega = fecha_entrega;
            this.descripcion = descripcion;
    }

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public Comuna getComuna() {
        return comuna;
    }

    public String getSector() {
        return sector;
    }

    public String getEmail() {
        return email;
    }

    public String getCelular() {
        return celular;
    }

    public TipoMascota getTipo(){
        return tipo;
    }

    public Integer getCantidad(){
        return cantidad;
    }

    public Integer getEdad() {
        return edad;
    }

    public UnidadMedida getUnidadMedida(){
        return unidad_medida;
    }

    public LocalDateTime getFecha_entrega() {
        return fecha_entrega;
    }

    public LocalDateTime getFecha_ingreso() {
        return fecha_ingreso;
    }

    public String getDescripcion() {
        return descripcion;
    }

}
