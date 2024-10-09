
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { RealizadasComponent } from './pages/realizadas/realizadas.component';
import { HacerComponent } from './pages/hacer/hacer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tareas', component: TareasComponent },      // agregar componente para eliminar tarea
  { path: 'realizadas', component: RealizadasComponent },
  { path: 'por hacer', component: HacerComponent },
  {path: 'clientes', component: ClientesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];
