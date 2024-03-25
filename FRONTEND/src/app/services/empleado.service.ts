import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  
  private baseURL = "http://localhost:8080/empleado";

  constructor(private httpClient:HttpClient) { }


  //obtener todos los empleados
  obtenerTotalEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}/`);
  }  

  //método para agregar nuevo registro
  agregarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/`, empleado);
  }

  //método para obtener un registro
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }
  
  //método para eliminar un registro
  eliminarEmpleado(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  //método para actualizar registro
  actualizarEmpleado(id:number, empleado:Empleado):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
  }





}
