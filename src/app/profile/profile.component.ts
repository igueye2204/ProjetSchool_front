import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
  
export class ProfileComponent implements OnInit {

  // @ts-ignore
  id: number;
  User: any;
  imgSrc = "";

  currentUser: any

  constructor(private token: TokenStorageService, private Userservice: UserService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.token.getInfoUser().id;
    console.log(this.id)
     this.currentUser = this.token.getInfoUser();

    this.Userservice.getUserById(this.id).subscribe(
      data=>{
        this.User = data;
        this.imgSrc = "data:image/jpeg;base64," + this.User.avatar;
        console.log(data);
      }
    )

  }

}
