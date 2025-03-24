import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../utils/interfaces/user';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private url = 'https://desa.ies-webcontent.com.mx/'
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login = (user: User) => {
    this.getAuth(user);
  }

  getAuth(user: User) {
    this.http.post(`${this.url}login`, { username: user.userName, password: user.password }).subscribe((result: any) => {
      if (result.mensaje === 'El Usuario esta bloqueado' || result.mensaje === 'login correcto') {
        this.loggedIn.next(true);
        this.router.navigate(['/welcome'])
      } else {
        /* deberiamos habilitar solo return cuando el servicio funcione */
        this.loggedIn.next(false);
        return
      };

    }, (error: any) => {
      console.error(error);
      if (error.status === 404) {
        this.loggedIn.next(false);
      }
    });
  }

  logout = () => {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}
