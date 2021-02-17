import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { JwtService } from '../service/jwt.service';
import { TokenStorageService } from '../service/token-storage.service';

const linkHome = 'home';
declare var anime: any;
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
  roles: string[]  = [];


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private jwtservice:JwtService) { }

  ngOnInit(): void {
    console.log(this.tokenStorage.getToken())
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
       // @ts-ignore
      this.roles = this.tokenStorage.getInfoUser().roles[0];
      console.log(this.roles);
      console.log(this.tokenStorage.getUser())
    }

    var current: { pause: () => void; } = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (data) => {


        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        console.log(this.tokenStorage.getInfoUser());


        this.isLoginFailed = false;
        this.isLoggedIn = true;
         // @ts-ignore
         
        this.roles = this.tokenStorage.getInfoUser();
        const link = ['admin/users/listuser'];
        this.router.navigate(link);
        setTimeout(() => {
          window.location.reload();
        }, 1);

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
