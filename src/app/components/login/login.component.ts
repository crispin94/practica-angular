import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  formSubmitAttempt!: boolean;
  closeAlert = false;
  isLoggedIn$!: Observable<boolean>;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.controls[field].valid && this.form.controls[field].touched) ||
      (this.form.controls[field].untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
    setTimeout(() => {
      this.formSubmitAttempt = false;
      this.closeAlert = true;
      this.isLoggedIn$.subscribe((logged: any)=> {if(!logged){
        this.form.reset();
        this.closeAlert = true;
        setTimeout(() => {
          this.closeAlert = false;
        }, 3500);
      }})
    }, 4000);
  }

}
