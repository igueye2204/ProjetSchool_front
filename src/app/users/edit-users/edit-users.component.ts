import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  form:any = {};
  submitted = false;
  selectImg: any = null;
  imgSrc:string;
  user = new User;
  isSuccessful = false;
  id: number;
  url = environment.apiUrl;
  contactForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {



    this.route.paramMap.subscribe(
      params => this.id = parseInt(params.get('id'))
      );

      this.loadData();
    }


  loadData(){
    this.userService.getUserById(this.id).subscribe(
      data => {
        this.user = data
        this.imgSrc = "data:image/jpeg;base64," + this.user.avatar;

        this.contactForm = this.formBuilder.group({
          username: [ this.user.username, Validators.required],
          prenom: [ this.user.prenom,Validators.required],
          nom: [ this.user.nom, Validators.required],
          email: [ this.user.email, [Validators.required, Validators.email]],
          avatar: [ this.user.avatar, Validators.required]
        });
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

    onSubmit():void{

      this.submitted = true;

       const formdata = new FormData();
      formdata.append('username', this.contactForm.get('username').value);
      formdata.append('prenom', this.contactForm.get('prenom').value);
      formdata.append('nom', this.contactForm.get('nom').value);
      formdata.append('email', this.contactForm.get('email').value);
      formdata.set('avatar', this.contactForm.get('avatar').value);


      this.userService.updateUserById(this.id, formdata).subscribe(

            data =>{
                   this.isSuccessful = true;
                   const link = ['admin/users/detailuser/' + this.id];

                      setTimeout(() => {
                        this.router.navigate(link);
                      }, 1000);
                  },
                  error =>{

                    this.isSuccessful = true;

                  }


          )
    }


}
