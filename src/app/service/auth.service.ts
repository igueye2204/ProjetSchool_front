import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl;

  constructor(private http: HttpClient, ) { }

  login(credentials: { username: string; password: string; }): Observable<any> {
    return this.http.post(this.url + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: {
    username: string;
    prenom: string;
    nom: string;
    password: string;
    email: string;
    profil: string;
    avatar: Blob
  }): Observable<any> {
    return this.http.post(this.url + 'admin/users', {
      username: user.username,
      prenom: user.prenom,
      nom: user.nom,
      email: user.email,
      password: user.password,
      profil: user.profil,
      avatar: user.avatar
    }, httpOptions);
  }
}
