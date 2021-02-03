import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/admin/profilsorties';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  constructor(private http: HttpClient) { }

  getAllProfilSortie(){
    return this.http.get<any>(API_URL, { responseType: 'json'});
  }

  getProfilSortieById(id: number){
    return this.http.get<any>(API_URL + '/' + id , { responseType: 'json'});
  }

}
