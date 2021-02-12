import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilSortie } from '../models/ProfilSortie';

const API_URLS = 'http://127.0.0.1:8000/api/admin/profilsorties';
const API_URL = 'http://127.0.0.1:8000/api/admin/profilsortie';
const API_UR = 'http://172.0.0.1:8000/api/admin/profilsortiedeleted'

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  constructor(private http: HttpClient) { }

  getAllProfilSortie(): Observable<any>{
    return this.http.get<any>(API_URLS, { responseType: 'json'});
  }

  getAllProfilSortieArchive(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/admin/profilsortiedeleted', {responseType: 'json'});
  }

  getProfilSortieById(id: number): Observable<any>{
    return this.http.get(API_URL + '/' + id , { responseType: 'json'});
  }

  updateProfilSortieById(id: number, profil:ProfilSortie): Observable<any> {
    return this.http.put(API_URL + '/' + id, profil);
  }

  desarchiveProfilSortie(id: number): Observable<any> {
    return this.http.delete(API_URLS + '/desarchive/' + id, {headers: new HttpHeaders, responseType: 'blob'})
  }

  deleteProfilSortieById(id: number): Observable<any> {
    return this.http.delete(API_URLS + '/' + id, {headers: new HttpHeaders, responseType: 'blob'});
  }

}
