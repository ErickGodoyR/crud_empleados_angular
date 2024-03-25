import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit{

  id:number;
  empleado:Empleado = new Empleado();

  constructor(private empleadoService:EmpleadoService,private router:Router ,private route:ActivatedRoute){}
  
  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(
      {
        next: dato => {
          this.empleado = dato;
        },
        error: error => {
          console.log(error);
        }
      })    
  }


  irListaEmpleados(){
    this.router.navigate(['listar-empleados']);
  }


  onSubmit(){
    this.empleadoService.actualizarEmpleado(this.id, this.empleado).subscribe(
      {
        next: dato => {
          this.irListaEmpleados();
        },
        error: error => {
          console.log(error);
        }
      })
  }
  


}



