import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './utils/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'welcome',
    loadChildren: () => import('./components/welcome-page/welcome-page.module').then(m => m.WelcomePageModule),
    // habilitar para usar Guard=> canActivate: [AuthGuard]
  },
  {
    path: 'conversiones',
    loadChildren: () => import('./components/conversiones/conversiones.module').then(m => m.ConversionesModule)
  },
  {
    path: 'calcula-fecha',
    loadChildren: () => import('./components/calcula-fecha/calcula-fecha.module').then(m => m.CalculaFechaModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./components/formulario/formulario.module').then(m => m.FormularioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
