import { Component, OnInit } from '@angular/core';
import { GroupeCompetence } from 'src/app/models/GroupeCompetence';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CompetenceService } from 'src/app/service/competence.service';
import { GrpCompetenceService } from 'src/app/service/grp-competence.service';
import { element } from 'protractor';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-grpcompetence',
  templateUrl: './post-grpcompetence.component.html',
  styleUrls: ['./post-grpcompetence.component.scss']
})
export class PostGrpcompetenceComponent implements OnInit {

  option:any;
  form = new GroupeCompetence;
  dropdownList: any;
  selectedItems: any;
  dropdownSettings = {};
  isSuccessful = false;

  constructor(private competenceservice: CompetenceService, private grpcompetence: GrpCompetenceService) {}

  ngOnInit() {
    this.fetchPosts();

    this.dropdownSettings = {
      singleSelection: false,
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
  }

  fetchPosts(): void{
  this.competenceservice.getAllCompetence().subscribe(
      data =>{

        this.dropdownList = data;
        console.log(this.dropdownList);
        // this.content = this.content['hydra:member'];
      },
      error =>{
        alert('probléme d\'accés');
        console.log(error);
      }
      )
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit(f:NgForm){
    this.grpcompetence.postGrpCompetence(f.value).subscribe(
        data=>{
          this.isSuccessful = true;
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
    )
  }

}
