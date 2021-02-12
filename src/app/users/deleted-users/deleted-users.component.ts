import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-deleted-users',
  templateUrl: './deleted-users.component.html',
  styleUrls: ['./deleted-users.component.scss']
})
export class DeletedUsersComponent implements OnInit {


  searchText: string;
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 15];
  searchResult: User[];
  f:NgForm;
  id:number;
  status: string;
  userAr: void;
  constructor(private user:UserService) {
  }


  ngOnInit(): void {
    this.searchResult = [];
    this.fetchPosts();
  }

  fetchPosts(): void{
    this.user.getUserDeleted().subscribe(
      data =>{
            this.POSTS = data;
            console.log(data);
        },
        error =>{
      alert('probléme d\'accés');
      console.log(error);
    }
    )
  }

  deleteUser(id:number){
    console.log(id);
      this.user.desarchiveUser(id).subscribe(
        res=>{
          window.location.reload();
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

}
