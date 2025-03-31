import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  listaMenu = [
    {
      titulo: 'Inicio',
      redirect: '/welcome'
    },
    {
      titulo: 'Conversiones',
      redirect: '/conversiones'
    },
    {
      titulo: 'Calcula fechas',
      redirect: '/calcula-fecha'
    },
    {
      titulo: 'Formulario',
      redirect: '/formulario'
    },
    {
      titulo: 'Cerrar sesión',
      redirect: '/'
    }
  ];

  isMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  isSelected(url: string): boolean {
    return this.router.url === url;
  }
}
