import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
  userinput = '';
  inputForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalComponent>){
  }

  ngOnInit() {
        this.inputForm = this.formBuilder.group({
            nombre: new FormControl('', Validators.required)
        })
    }

  returnResult(){
   this.dialogRef.close(this.inputForm.value.nombre);
  }

}
