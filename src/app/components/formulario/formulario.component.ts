import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'formulario-app',
  templateUrl: 'formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  myForm!: FormGroup;
  submitted = false;
  filteredLectura: any;
  optionsShared = [{ value: 'Si', id: 0 }, { value: 'No', id: 1 }];
  validaEspacioNombre = false;
  validaEspacioApellido = false;
  showLoading = false;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      fumas: ['', Validators.required],
      practicaLectura: ['', Validators.required],
      libros: this.fb.array([
        this.initLibros()
      ]),
      estadoCivil: ['', Validators.required]
    });
    this.fa.valueChanges.subscribe(value => {
      console.log('name has changed:', value)
    });
  }

  trackByFn(index: number, item: any) {
    return item.trackingId;
  }

  initLibros() {
    return this.fb.group({
      libro: this.fb.control('', Validators.required),
      trackingId: this.generateUniqueId()
    });
  }
  /* genermos un id unico para no perder los elementos del arreglo  */
  generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  get fa() { return this.myForm.get('libros') as FormArray; }

  addGroup() {
    this.fa.push(this.initLibros());
  }

  removeGroup(i: number) {
    this.fa.removeAt(i);
  }

  onSubmit() {
    this.submitted = true;
    console.log('value: ', this.myForm.value);
    console.log('valid: ', this.myForm.valid);
    this.showLoading = true;
    setTimeout(() => {
      this.showLoading = false;
    }, 2500);
  }
  // parte formulario principal
  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.myForm.reset();
  }

  onOptionsSelected() {
    this.filteredLectura = this.myForm.value.practicaLectura.value;
  }

  validarEspacios = (cadena : string) => {
    cadena.endsWith(' ') ? this.validaEspacioNombre = true:  this.validaEspacioNombre = false;
  }

  validarEspaciosApellidos = (cadena : string) => {
    cadena.endsWith(' ') ? this.validaEspacioApellido = true:  this.validaEspacioApellido = false;
  }

}
