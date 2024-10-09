import { Component, inject, OnInit} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { TareasService } from './service/tareas.service';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:
  [
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule,
    RouterLink,
    RouterOutlet,
    MatButton,
    MatIconModule,
    MatDividerModule,


  ],
})
export class AppComponent{
  routes = routes.filter( route => route.path); // Filtrar las rutas con etiquetas
  activeLink = this.routes[0].path; // Ruta activa por defecto

  constructor(private router: Router) {}
}

