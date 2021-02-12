import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

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
    return this.http.get(API_URL + '/' + id, { responseType: 'json'});
  }
   //update profil

   updateUserById(id: number, user: User, formdata: any): Observable<any> {
    return this.http.put(API_URL + '/' + id, user, formdata);
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete(API_URL + '/' + id, {headers: new HttpHeaders, responseType: 'blob'});
  }

  getUserDeleted(): Observable<any> {
     return this.http.get('http://127.0.0.1:8000/api/admin/usersdeleted', { responseType: 'json' });
  }

   desarchiveUser(id: number): Observable<any> {
     return this.http.delete(API_URL + '/desarchive/' + id, {headers: new HttpHeaders, responseType: 'blob'})
   }
}
