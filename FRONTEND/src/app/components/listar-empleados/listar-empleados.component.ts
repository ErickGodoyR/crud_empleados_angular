import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit{

  empleados:Empleado[];
  
  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void {
    this.totalEmpleados();
  }

  private totalEmpleados(){
    this.empleadoServicio.obtenerTotalEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  public actualizar_empleado(id:number){
    this.router.navigate(['actualizar',id]);
  }

  public eliminar_empleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(
      dato => {
        this.totalEmpleados();
      }
    )
  }


}
