import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CostumevalidationService } from 'src/app/service/costumevalidation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-users',
  templateUrl: './post-users.component.html',
  styleUrls: ['./post-users.component.scss']
})
export class PostUsersComponent implements OnInit {

  contactForm: FormGroup;
  selectImg: any = null;
  imgSrc: string = "/assets/images/images.png";
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  url = environment.apiUrl;
  submitted = false;


  constructor( private formBuilder: FormBuilder, private http: HttpClient,private customValidator: CostumevalidationService) { }

  imageURL: string;

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required],this.customValidator.userNameValidator.bind(this.customValidator)],
      prenom: ['',Validators.required ],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profil: ['', Validators.required],
      avatar: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]]
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword')
      }
      );
  }

  onFileSelect(event: any): void{
    // console.log(this.postuser.get('prenom').value);
    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.imgSrc = e.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.selectImg = event.target.files[0];

    }else{

      this.imgSrc = "/assets/images/images.png";
      this.selectImg = null;

    }
  }

  get f(){
    return this.contactForm.controls;
 }

  onSubmit(): void {

    this.submitted = true;
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
