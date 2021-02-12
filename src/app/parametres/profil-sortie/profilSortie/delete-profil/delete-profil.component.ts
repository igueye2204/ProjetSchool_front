import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilSortie } from 'src/app/models/ProfilSortie';
import { ProfilSortieService } from 'src/app/service/profil-sortie.service';

@Component({
  selector: 'app-delete-profil',
  templateUrl: './delete-profil.component.html',
  styleUrls: ['./delete-profil.component.scss']
})
export class DeleteProfilComponent implements OnInit {

  searchText: string;
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 15];
  searchResult: ProfilSortie[];
  f:NgForm;
  id:number;
  status: string;
  userAr: void;

  constructor(private profilSortie:ProfilSortieService) {
  }


  ngOnInit(): void {
    this.fetchPosts();
    this.searchResult = [];
  }

  fetchPosts(): void{
    this.profilSortie.getAllProfilSortieArchive().subscribe(
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
      this.profilSortie.desarchiveProfilSortie(id).subscribe(
        res=>{
          window.location.reload();
        }
        )

  }

  selectUser(user:ProfilSortie){
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
