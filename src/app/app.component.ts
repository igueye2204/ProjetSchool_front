import { Component, OnInit } from '@angular/core';/* 
import { TokenStorageService } from './service/token-storage.service'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

 

  constructor(/* private tokenStorageService: TokenStorageService */) { }

  ngOnInit(): void {
    /* this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    } */
  }

  logout(): void {
    /* this.tokenStorageService.signOut();
    window.location.reload(); */
  }
}