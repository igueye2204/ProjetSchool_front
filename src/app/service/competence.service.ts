import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://127.0.0.1:8000/api/admin/competences';
@Injectable({
  providedIn: 'root'
})
export class CompetenceService {


  constructor(private http: HttpClient) { }



  getAllCompetence(): Observable<any> {
    return this.http.get<any>(API_URL , { responseType: 'json'});
  }

  getCompetenceById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

  postCompetence(): Observable<any> {
      return this.http.post<any>(API_URL , { responseType: 'json'});
  }
}
