import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-profil-sortie',
  templateUrl: './post-profil-sortie.component.html',
  styleUrls: ['./post-profil-sortie.component.scss']
})
export class PostProfilSortieComponent implements OnInit {

  contactForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  url = environment.apiUrl;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      libelle: ['']
    });
  }

  get f(){
    return  this.contactForm.controls;
 }
  onSubmit(): void {

    const formdata = new FormData();
    formdata.append('libelle', this.contactForm.get('libelle').value);

    console.log(formdata)
    this.http.post<any>(this.url + 'admin/profilsorties', formdata, {headers: new HttpHeaders, responseType: 'json'}).subscribe(
      data => {
        console.log(data)
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      }/* ,
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      } */
    );
  }

}
