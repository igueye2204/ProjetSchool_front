import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {


  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 15];
  constructor(private user:UserService) {
  }


  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void{
    this.user.getAllUser().subscribe(
      data =>{
        this.POSTS = data ;

        console.log(this.POSTS);

        // this.content = this.content['hydra:member'];
      },
      error =>{
        alert('probléme d\'accés');
        console.log(error);
      }
    )
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
