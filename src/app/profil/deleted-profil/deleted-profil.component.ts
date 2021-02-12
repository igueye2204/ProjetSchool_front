import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profil } from 'src/app/models/profil';
import { ProfilService } from 'src/app/service/profil.service';

@Component({
  selector: 'app-deleted-profil',
  templateUrl: './deleted-profil.component.html',
  styleUrls: ['./deleted-profil.component.scss']
})
export class DeletedProfilComponent implements OnInit {

  searchText: string;
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 15];
  searchResult: Profil[];
  f:NgForm;
  id:number;
  status: string;
  userAr: void;
  constructor(private profil:ProfilService) {
  }


  ngOnInit(): void {
    this.searchResult = [];
    this.fetchPosts();
  }

  fetchPosts(): void{
    this.profil.getProfilDeleted().subscribe(
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

  desarchiveProfil(id:number){
    console.log(id);
      this.profil.desarchiveProfil(id).subscribe(
        res=>{
          window.location.reload();
        }
        )

  }

  selectUser(user:Profil){
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
