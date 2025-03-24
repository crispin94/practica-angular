import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calcula-fecha',
  templateUrl: './calcula-fecha.component.html',
  styleUrls: ['./calcula-fecha.component.css'],
})
export class CalculaFechaComponent {
  model!: NgbDateStruct;
  cantidad = '';
  searchSelector = "Deafult";
  mostrarResultadoMensaje = false;
  fechaFormateada: any;
  showError = false;
  constructor() { }

  numberOnly = (event: any): boolean => {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  ngDropDwonClick(value: string) {
    this.searchSelector = value;
  }

  calcularFecha = () => {
    if (!this.model || typeof this.model.year !== 'number' || typeof this.model.month !== 'number' || typeof this.model.day !== 'number') {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 2500);
      return;
    }
    const cantidad = parseInt(this.cantidad)
    const fecha = new Date(this.model.year, this.model.month - 1, this.model.day);
    if (this.searchSelector === 'dias') {
      fecha.setDate(fecha.getDate() + cantidad);
    } else if (this.searchSelector === 'meses') {
      fecha.setMonth(fecha.getMonth() + cantidad);
    } else if (this.searchSelector === 'anios') {
      fecha.setFullYear(fecha.getFullYear() + cantidad);
    }
    //podriamos ocupar esta forma para formatear manualmente
   /*  const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear(); */
    // this.fechaFormateada = `${dia}/${mes}/${anio}`;

    this.fechaFormateada = fecha;
  }

}
