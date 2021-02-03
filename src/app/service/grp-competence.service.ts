import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupeCompetence } from '../models/GroupeCompetence';

const API_URL = 'http://127.0.0.1:8000/api/admin/grpcompetences';

@Injectable({
  providedIn: 'root'
})

export class GrpCompetenceService {


  constructor(private http: HttpClient) { }

  postGrpCompetence(grpcompetence: GroupeCompetence): Observable<any> {
    return this.http.post(API_URL, grpcompetence, {headers: new HttpHeaders, responseType: 'arraybuffer'});
  }

  getAllGrpCompetence(): Observable<any> {
    return this.http.get<any>(API_URL , { responseType: 'json'});
  }

  getGrpCompetenceById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

}
