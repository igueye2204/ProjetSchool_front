import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilSortie } from '../models/ProfilSortie';

const API_URLS = 'http://127.0.0.1:8000/api/admin/profilsorties';
const API_URL = 'http://127.0.0.1:8000/api/admin/profilsortie';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  constructor(private http: HttpClient) { }

  getAllProfilSortie(){
    return this.http.get<any>(API_URLS, { responseType: 'json'});
  }

  getProfilSortieById(id: number){
    return this.http.get<any>(API_URL + '/' + id , { responseType: 'json'});
  }

  updateProfilSortieById(id: number, profil:ProfilSortie): Observable<any> {
    return this.http.put(API_URL + '/' + id, profil);
  }
}
