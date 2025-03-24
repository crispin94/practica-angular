import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionesComponent } from './conversiones.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components.module';



@NgModule({
  declarations: [ConversionesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: ConversionesComponent }
    ])
  ]
})
export class ConversionesModule { }
