import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { TokenStorageService } from './service/token-storage.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private roles: string[] | undefined;
  isLoggedIn = false;
  username: string | undefined;
  id: any;
  user: User;
  imgSrc: string;

  constructor(private tokenStorageService: TokenStorageService, private userservice: UserService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {

      const user = this.tokenStorageService.getInfoUser();
      // @ts-ignore
      this.roles = user.roles;
      // @ts-ignore
      this.username = user.username;

      //@ts-ignore
      this.id = this.tokenStorageService.getInfoUser().id;

      this.userservice.getUserById(this.id).subscribe(
        data=>{
          this.user = data;
          this.imgSrc = "data:image/jpeg;base64," + this.user.avatar;
        })
    }
}

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
