import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profil } from '../models/profil';

const API_URL = 'http://127.0.0.1:8000/api/admin/profils';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  //Get all profil

  getAllProfil(): Observable<any> {
    return this.http.get(API_URL , { responseType: 'json'});
  }

  //get One profil

  getProfilById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

  //update profil

  updateProfilById(id: number, profil:Profil): Observable<any> {
    return this.http.put(API_URL + '/' + id, profil);
  }

}
