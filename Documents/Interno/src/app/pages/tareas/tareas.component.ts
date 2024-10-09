import { CommonModule } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../service/tareas.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    FormsModule,
  ],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class  TareasComponent implements OnInit {
  listaTareas:string[] = [];
  nuevaTarea:string = '';

  private _tareasService = inject(TareasService);


  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }

}


