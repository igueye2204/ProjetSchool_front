import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

    constructor(private jwtService: JwtService) { 
  }

  signOut(): void {
    window.localStorage.clear();
  }

    public saveToken(token: string): void {

    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    //this.jwtService.DecodeToken(jwtTokenValue);
  }

    public getToken(): string | null {

    return localStorage.getItem(TOKEN_KEY);

  }

    public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

    public getUser(): any {
     return localStorage.getItem(USER_KEY);
  }
}
