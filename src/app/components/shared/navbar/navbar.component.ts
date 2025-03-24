import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
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
    }];

}
