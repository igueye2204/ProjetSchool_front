import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfilSortieService } from 'src/app/service/profil-sortie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil-sortie',
  templateUrl: './profil-sortie.component.html',
  styleUrls: ['./profil-sortie.component.scss']
})
export class ProfilSortieComponent implements OnInit {

  contactForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  contents: [] = [];
  errorMessage = '';
  url = environment.apiUrl;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private profilSortie: ProfilSortieService) { }
  affiche(){
    this.profilSortie.getAllProfilSortie().subscribe(
      data =>{
        this.contents = data;
        console.log(this.contents);

        // this.content = this.content['hydra:member'];
      },
      error =>{
        alert('probléme d\'accés');
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      libelle: ['']
    });

    this.affiche();
  }

  get f(){
    return  this.contactForm.controls;
 }
  onSubmit(): void {

    const formdata = new FormData();
    formdata.append('libelle', this.contactForm.get('libelle').value);

    console.log(formdata)
    this.http.post<any>(this.url + 'admin/profilsorties', formdata).subscribe(
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
