import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfilSortie } from 'src/app/models/ProfilSortie';
import { ProfilSortieService } from 'src/app/service/profil-sortie.service';
import { ProfilSortieComponent } from '../profil-sortie.component';

@Component({
  selector: 'app-edit-profil-sortie',
  templateUrl: './edit-profil-sortie.component.html',
  styleUrls: ['./edit-profil-sortie.component.scss']
})
export class EditProfilSortieComponent implements OnInit {

  profil = new ProfilSortie;
  isSuccessful = false;
  id: number;

  constructor( private profilServe: ProfilSortieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id = parseInt(params.get('id'))
      );
      console.log(this.id)
      this.loadData();
    }


  loadData(){
    this.profilServe.getProfilSortieById(this.id).subscribe(
      data => this.profil = data
      );
      console.log(this.profil)
    }

  onSubmit(f:NgForm):void {
    this.profilServe.updateProfilSortieById(this.id,f.value).subscribe(
      data =>{
        this.isSuccessful = true;
        console.log("Form: ", f.value);
        console.log("Data: ", data);
      }
    )
  }

}
