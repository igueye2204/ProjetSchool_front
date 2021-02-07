import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfilSortieService } from 'src/app/service/profil-sortie.service';

@Component({
  selector: 'app-profil-sortie',
  templateUrl: './profil-sortie.component.html',
  styleUrls: ['./profil-sortie.component.scss']
})
export class ProfilSortieComponent implements OnInit {

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 15];

  constructor(private profilSortie:ProfilSortieService) { }



  ngOnInit(): void {

    this.affiche();

  }

     affiche(): void{
    this.profilSortie.getAllProfilSortie().subscribe(
      data =>{
        this.POSTS = data;
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
    this.affiche();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.affiche();
  }

}
