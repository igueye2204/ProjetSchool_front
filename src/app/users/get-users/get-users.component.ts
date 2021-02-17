import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})

export class GetUsersComponent implements OnInit {


  searchText: string;
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 15];
  searchResult: User[];
  f:NgForm;
  constructor(private user:UserService, private router: Router) {
  }


  ngOnInit(): void {

    this.searchResult = [];
    this.fetchPosts();
  }

  fetchPosts(): void{

    this.user.getAllUser().subscribe(
      data =>{
            this.POSTS = data;
        },
        error =>{
      alert('probléme d\'accés');
      console.log(error);
    }
    )
  }

  selectUser(user:User){
    console.log(user);
  }

  search(chaine: any){
    console.log(chaine)
  }


  onTableDataChange(event: number){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  deleteUser(id:number){
    if(confirm('Voulez vous vraiment supprimer cet utilisateur'))
    this.user.deleteUserById(id).subscribe(
        res=>{
          window.location.reload();
        });
  }

}
