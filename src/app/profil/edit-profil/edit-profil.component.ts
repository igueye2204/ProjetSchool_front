import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { Profil } from 'src/app/models/profil';
import { ProfilSortie } from 'src/app/models/ProfilSortie';
import { ProfilSortieService } from 'src/app/service/profil-sortie.service';
import { ProfilService } from 'src/app/service/profil.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {

  // profil = new Profil;
  profil = new Profil;
  isSuccessful = false;
  id: number;

  constructor( private profilServ: ProfilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id = parseInt(params.get('id'))
      );
      console.log(this.id)
      this.loadData();
    }


  loadData(){
    this.profilServ.getProfilById(this.id).subscribe(
      data => this.profil = data
      );
      console.log(this.profil)
    }

  onSubmit(f:NgForm):void {
    this.profilServ.updateProfilById(this.id,f.value).subscribe(
      data =>{
        this.isSuccessful = true;
        console.log("Form: ", f.value);
        console.log("Data: ", data);
      }
    )
  }
}
