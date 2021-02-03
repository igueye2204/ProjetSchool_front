import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/service/profil.service';

@Component({
  selector: 'app-get-profil',
  templateUrl: './get-profil.component.html',
  styleUrls: ['./get-profil.component.scss']
})
export class GetProfilComponent implements OnInit {


  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  constructor(private profil:ProfilService) { }



  ngOnInit(): void {

    this.affiche();

  }

     affiche(): void{
    this.profil.getAllProfil().subscribe(
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
