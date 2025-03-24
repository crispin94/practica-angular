import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/http/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  isLoggedIn$: Observable<boolean> | undefined;
  result = '';
  constructor(private authService: AuthService, public dialog: MatDialog){}
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.result = result;
    });
  }

  onLogout() {
    this.authService.logout();
  }

}
