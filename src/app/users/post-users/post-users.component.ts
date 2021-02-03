import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-users',
  templateUrl: './post-users.component.html',
  styleUrls: ['./post-users.component.scss']
})
export class PostUsersComponent implements OnInit {

  contactForm: FormGroup;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  url = environment.apiUrl;

  constructor( private formBuilder: FormBuilder, private http: HttpClient,) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      username: [''],
      prenom: [''],
      nom: [''],
      email: [''],
      password: [''],
      profil: [''],
      avatar: ['']
    });
  }

  onFileSelect(event: any): void{
    // console.log(this.postuser.get('prenom').value);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.contactForm.get('avatar').setValue(file);
    }
  }

  get f(){
    return  this.contactForm.controls;
 }

  onSubmit(): void {

    const formdata = new FormData();

    formdata.append('username', this.contactForm.get('username').value);
    formdata.append('password', this.contactForm.get('password').value);
    formdata.append('prenom', this.contactForm.get('prenom').value);
    formdata.append('nom', this.contactForm.get('nom').value);
    formdata.append('email', this.contactForm.get('email').value);
    formdata.append('profil', this.contactForm.get('profil').value);
    formdata.append('avatar', this.contactForm.get('avatar').value);


    this.http.post(this.url + 'admin/users', formdata, {headers: new HttpHeaders, responseType: 'arraybuffer'}).subscribe(
      data => {
        console.log(data)
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        window.location.reload();
      }/* ,
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      } */
    );
  }

}
