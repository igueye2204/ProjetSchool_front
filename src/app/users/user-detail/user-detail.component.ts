import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id: number;
  user = new User;
  libelle: string;
  imgSrc = "/assets/images/images.png";

  constructor( private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id = parseInt(params.get('id'))
      );
      console.log(this.id)
      this.loadData();
    }


  loadData(){
    this.userService.getUserById(this.id).subscribe(
      data =>{
      this.user = data
      this.imgSrc = "data:image/jpeg;base64," + this.user.avatar;
      console.log(this.user)
      }
      );
    }

    deleteUser(){
      this.userService.deleteUserById(this.id).subscribe(
        response =>{
              const link = ['admin/users/listuser'];
              this.router.navigate(link);
              
        }
      )
    }

}
