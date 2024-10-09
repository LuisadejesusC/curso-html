import { Component } from '@angular/core';
import { Route } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-realizadas',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './realizadas.component.html',
  styleUrl: './realizadas.component.css'
})
export class RealizadasComponent {

  constructor(){
    console.log("HOLA DESDE EL CONSTRUCTOR")
  }
}
