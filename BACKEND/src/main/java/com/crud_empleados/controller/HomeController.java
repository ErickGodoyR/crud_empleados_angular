package com.crud_empleados.controller;

import com.crud_empleados.entity.Empleado;
import com.crud_empleados.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/empleado")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {

    @Autowired
    private EmpleadoService empleadoService;


    //agregar nuevo registro
    @PostMapping("/")
    public ResponseEntity<Empleado> guardarEmpleado(@RequestBody Empleado empleado){
        Empleado empleadoGuardado = empleadoService.nuevoEmpleado(empleado);
        return ResponseEntity.ok(empleadoGuardado);
    }

    //mostrar total de registros
    @GetMapping("/")
    public ResponseEntity<?> listarEmpleados(){
        return ResponseEntity.ok(empleadoService.totalEmpleados());
    }

    //mostrar registro por id
    @GetMapping("/{id}")
    public Empleado mostrarUnEmpleado(@PathVariable("id") Long id){
        return empleadoService.obtenerEmpleado(id);
    }

    //actualizar registro
    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarEmpleado(@RequestBody Empleado empleado, @PathVariable Long id){
        empleado.setId(id);
        empleadoService.actualizarEmpleado(empleado);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //eliminar empleado
    @DeleteMapping("/{id}")
    public void eliminarEmpleado(@PathVariable("id") Long id){
        empleadoService.eliminarEmpleado(id);
    }

}
