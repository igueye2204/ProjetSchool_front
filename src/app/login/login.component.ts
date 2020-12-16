import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { JwtService } from '../service/jwt.service';
import { TokenStorageService } from '../service/token-storage.service';
//const linkHome = 'home';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
 

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private jwtservice:JwtService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;      
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (data) => {
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(this.roles);    
        this.roles = this.tokenStorage.getUser().roles;
       // this.router.navigate(linkHome);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  reloadPage(): void {
    window.location.reload();
  }

}