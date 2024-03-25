package com.crud_empleados.service;

import com.crud_empleados.entity.Empleado;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmpleadoService {

    Empleado nuevoEmpleado (Empleado empleado);
    Empleado actualizarEmpleado (Empleado empleado);
    List<Empleado> totalEmpleados();
    Empleado obtenerEmpleado(Long id);
    void eliminarEmpleado (Long id);

}
