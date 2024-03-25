package com.crud_empleados.service;

import com.crud_empleados.entity.Empleado;
import com.crud_empleados.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoServiceImpl implements EmpleadoService{

    @Autowired
    public EmpleadoRepository empleadoRepository;


    @Override
    public Empleado nuevoEmpleado(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    @Override
    public Empleado actualizarEmpleado(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    @Override
    public List<Empleado> totalEmpleados() {
        return empleadoRepository.findAll();
    }

    @Override
    public Empleado obtenerEmpleado(Long id) {
        return empleadoRepository.findById(id).get();
    }

    @Override
    public void eliminarEmpleado(Long id) {
        Empleado empleado = new Empleado();
        empleado.setId(id);
        empleadoRepository.delete(empleado);
    }
}

