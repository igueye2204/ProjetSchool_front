import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  // profil = new Profil;
  form:any = {};
  user = new User;
  isSuccessful = false;
  id: number;
  f:NgForm;
  url = environment.apiUrl;

  constructor( private userService: UserService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id = parseInt(params.get('id'))
      );
      console.log(this.id)
      this.loadData();
    }


  loadData(){
    this.userService.getUserById(this.id).subscribe(
      data => this.user = data
      );
      console.log(this.user)
    }

    onFileSelect(event: any): void{
      // console.log(this.postuser.get('prenom').value);
      if (event.target.files.length > 0) {
        const file = event.target.files[0];

        this.f.setValue(file);
      }
    }


    onSubmit(f:NgForm):void{
      console.log(f.value);
       const formdata = new FormData();
       formdata.append('username', f.value['username']);
       formdata.append('nom', f.value['nom']);
       formdata.append('email', f.value['email']);
       formdata.append('avatar', f.value['avatar']);
      //  const httpOptions = {
      //   headers: new HttpHeaders({
      //       responseType: 'json'
      //     })
      //   };
      this.http.put(this.url + 'admin/users/' + this.id, formdata, {headers: new HttpHeaders, responseType: 'blob'} ).subscribe(
            data =>{
                   this.isSuccessful = true;
                   console.log("Form: ", f.value);
                    console.log("Data: ", data);
                  },
                  error =>{
                    console.log(error);
                  }


          )
    }


}
