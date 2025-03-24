import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculaFechaComponent } from './calcula-fecha.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components.module';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CalculaFechaComponent],
  imports: [
    NgbDropdownModule,
    NgbDatepickerModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: CalculaFechaComponent }
    ])
  ]
})
export class CalculaFechaModule { }
