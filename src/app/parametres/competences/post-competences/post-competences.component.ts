import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompetenceService } from 'src/app/service/competence.service';
import { GrpCompetenceService } from 'src/app/service/grp-competence.service';

@Component({
  selector: 'app-post-competences',
  templateUrl: './post-competences.component.html',
  styleUrls: ['./post-competences.component.scss']
})
export class PostCompetencesComponent implements OnInit {

  contactForm: FormGroup;
  grpcompetence: any;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private fb: FormBuilder, private competenceService: CompetenceService, private grpcompetenceService: GrpCompetenceService) { }

  ngOnInit(): void {

    this.grpcompetenceService.getAllGrpCompetence().subscribe(
      data =>{
        this.grpcompetence = data;

        this.contactForm = this.fb.group({
          GrpCompetenceControl: ["Les Groupes de Compétences", Validators.required],
          username: ['', Validators.required],
          prenom: ['',Validators.required],
          nom: ['', Validators.required],
        });
      }
    )
  }

  get f(){
    return  this.contactForm.controls;
 }

  onSubmit(){

  }
}
