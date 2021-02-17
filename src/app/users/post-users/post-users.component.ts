// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { User } from 'src/app/models/user';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-post-users',
//   templateUrl: './post-users.component.html',
//   styleUrls: ['./post-users.component.scss']
// })
// export class PostUsersComponent implements OnInit {

//   contactForm: FormGroup;
//   selectImg: any = null;
//   imgSrc: string = "/assets/images/images.png";
//   form: any = {};
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';
//   url = 'http://127.0.0.1:8000/api/admin/users';
//   user: User;


//   constructor( private formBuilder: FormBuilder, private http: HttpClient) { }

//   imageURL: string;

//   ngOnInit(): void {

//     this.contactForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       prenom: ['',Validators.required],
//       nom: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       profil: ['', Validators.required],
//       avatar: ['', Validators.required],
//      password: ['', Validators.required],
//      confirmPassword: ['', Validators.required]
//     }
//       // {
//       //   validator: this.customValidator.MatchPassword('password', 'confirmPassword')
//       // }
//       );
//   }

//   // onFileSelect(event: any): void{
//   //   // console.log(this.postuser.get('prenom').value);
//   //   if (event.target.files.length > 0) {
//   //     const file = event.target.files[0];

//   //   }
//   // }
//   onFileSelect(event: any): void{
//     // console.log(this.postuser.get('prenom').value);

//     if (event.target.files &&  event.target.files[0]) {

//       const reader = new FileReader();
//       reader.onload = (e:any) => this.imgSrc = e.target.result;
//       reader.readAsDataURL(event.target.files[0]);
//       this.selectImg = event.target.files[0];
//       this.contactForm.get('avatar').setValue(this.selectImg);

//      }else{

//        this.imgSrc = "/assets/images/images.png";
//        this.selectImg = null;

//      }
//     console.log(this.selectImg);
//   }

//   get f(){
//     return this.contactForm.controls;
//  }

//   onSubmit(): void {



//     const formdata = new FormData();


//     formdata.append('username', this.contactForm.get('username').value);
//     formdata.append('password', this.contactForm.get('password').value);
//     formdata.append('prenom', this.contactForm.get('prenom').value);
//     formdata.append('nom', this.contactForm.get('nom').value);
//     formdata.append('email', this.contactForm.get('email').value);
//     formdata.append('profil', this.contactForm.get('profil').value);
//     formdata.append('avatar', this.contactForm.get('avatar').value);
//     console.log(formdata);

//     this.http.post(this.url, formdata).subscribe(
//       data => {
//         console.log(data)
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//         // window.location.reload();
//       }/* ,
//       err => {
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       } */
//     );
//   }

// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CostumevalidationService } from 'src/app/service/costumevalidation.service';
import { UserService } from 'src/app/service/user.service';
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
  url = 'http://127.0.0.1:8000/api/admin/users';
  imgSrc: string = "/assets/images/images.png";
  submitted = false;

  constructor( private formBuilder: FormBuilder, private http: HttpClient, private userService: UserService, private customValidator: CostumevalidationService, private router: Router) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
            username: ['', Validators.required],
            prenom: ['',Validators.required],
            nom: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            profil: ['', Validators.required],
            avatar: ['', Validators.required],
           password: ['', Validators.required],
           confirmPassword: ['', Validators.required]
          },
          {
            validator: this.customValidator.MatchPassword('password', 'confirmPassword')
          });
  }

  onFileSelect(event: any): void{
    if (event.target.files.length > 0) {

      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      const file = event.target.files[0];
      this.contactForm.get('avatar').setValue(file);

      }
    }

  get f(){
    return  this.contactForm.controls;
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

    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // file.inProgress = true;
    this.userService.postUser(formdata).subscribe(
      event => {
        console.log(event)
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        setTimeout(() => {

           window.location.reload();

        }, 500);
        // window.location.reload();
      } ,
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
