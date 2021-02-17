import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfilService } from 'src/app/service/profil.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-profil',
  templateUrl: './post-profil.component.html',
  styleUrls: ['./post-profil.component.scss']
})
export class PostProfilComponent implements OnInit {

  form:any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  url = environment.apiUrl;
  constructor(private http: HttpClient, private profilService : ProfilService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.profilService.postProfil(this.form).subscribe(
      data => {
        console.log(data)
      }/* ,
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      } */
    );
  }

}
