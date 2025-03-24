import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: FormularioComponent }
    ])
  ]
})
export class FormularioModule { }
