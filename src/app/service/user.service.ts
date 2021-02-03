import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const API_URL = 'http://127.0.0.1:8000/api/admin/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    return this.http.get<any>(API_URL , { responseType: 'json'});
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

   //update profil

   updateUserById(id: number, user: User, formdata: any): Observable<any> {
    return this.http.put(API_URL + '/' + id, user, formdata);
  }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }

  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }
}
