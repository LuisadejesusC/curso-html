import { routes } from '../../app.routes';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableDataSource } from '@angular/material/table';


export interface Cliente {

  position: number;
  id: number;
  razon: string;
  plataforma: string;

}

const ELEMENT_DATA: Cliente[] = [


  {position: 1, id:64 , razon:'MILAC / RENT EXPRESS', plataforma:'ENLACE FREIGHTLINER'},
  {position: 2, id:233, razon:'Efl P4', plataforma:'ENLACE FREIGHTLINER'},
  {position: 3, id:234,razon:'GRUVER', plataforma:'ENLACE FREIGHTLINER' },
  {position: 4, id:237, razon:'ZAPATA CAMIONES(CELAYA)/ZAPATA CAMIONES,S.A DE C.V', plataforma:'ENLACE FREIGHTLINER'},
  {position: 5, id:244,razon:'EFL2TECH/EFL2TECH', plataforma:'ENLACE FREIGHTLINER' },
  {position: 6, id:5,razon:'', plataforma:'ENLACE FREIGHTLINER' },
  {position: 7, id:6,razon:'', plataforma:'ENLACE FREIGHTLINER' },
  {position: 8, id:7, razon:'', plataforma:'ENLACE FREIGHTLINER'},
  {position: 9, id:8,razon:'', plataforma:'ENLACE FREIGHTLINER' },
  {position: 10, id:9 ,razon:'', plataforma:'ENLACE FREIGHTLINER'},
];



@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  displayedColumns: string[] = ['position', 'id', 'razon', 'plataforma'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
