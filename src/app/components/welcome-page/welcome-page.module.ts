import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components.module';
import { CambioLetrasPipe } from '../../utils/pipes/cambio-letras.pipe';


@NgModule({
  declarations: [WelcomePageComponent, CambioLetrasPipe],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: WelcomePageComponent }
    ])
  ]
})
export class WelcomePageModule { }
