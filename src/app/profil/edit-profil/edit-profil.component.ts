import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { Profil } from 'src/app/models/profil';
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

  constructor( private profilServe: ProfilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id = parseInt(params.get('id'))
      );
      console.log(this.id)
      this.loadData();
    }


  loadData(){
    this.profilServe.getProfilById(this.id).subscribe(
      data => this.profil = data
      );
      console.log(this.profil)
    }

  onSubmit(f:NgForm):void {
    this.profilServe.updateProfilById(this.id,f.value).subscribe(
      data =>{
        this.isSuccessful = true;
        console.log("Form: ", f.value);
        console.log("Data: ", data);
      }
    )
  }
}
