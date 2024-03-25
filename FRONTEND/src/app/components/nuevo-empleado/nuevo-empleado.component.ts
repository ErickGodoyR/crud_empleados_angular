import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit{

  empleado:Empleado = new Empleado();

  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void {
      
  }

  nuevoEmpleado(){
    this.empleadoServicio.agregarEmpleado(this.empleado).subscribe({
      next: dato => {
        this.redirigeListaEmpleado();
      },
      error: error => {
        console.log(error);
      }
    })    
  }


  redirigeListaEmpleado(){
    this.router.navigate(['listar-empleados']);
  }

  onSubmit(){
    this.nuevoEmpleado();
  }

}
