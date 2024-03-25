import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component';

const routes: Routes = [
  {path: 'empleados', component:HomeComponent},
  {path: '', redirectTo:'empleados',pathMatch:'full'},
  {path:'listar-empleados', component:ListarEmpleadosComponent},
  {path:'agregar-empleado', component:NuevoEmpleadoComponent},
  {path:'actualizar/:id', component:ActualizarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
