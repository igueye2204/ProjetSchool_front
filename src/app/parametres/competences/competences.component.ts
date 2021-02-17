import { Component, OnInit } from '@angular/core';
import { CompetenceService } from 'src/app/service/competence.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  competences: any = [];
  GrpLibelle: any;
  // fiels niveaux
  niveau1: any;  niveau2: any;  niveau3: any;
  criteres1: any; actions1: any;
  criteres2: any; actions2: any;
  criteres3: any; actions3: any;

  selectedOption: any;
  competenceChoised: any;
  idSelected: number | undefined;
  libelle: any;
  constructor(private competenceService: CompetenceService) { }

  ngOnInit(): void {
   this.getAllcompetence();
  }

  getAllcompetence() {
    this.competenceService.getAllCompetence().subscribe(data => {
        this.competences = data ;
         data.forEach((element: any) => {
              console.log(element.GroupeCompetence);
              (element.GroupeCompetence).forEach((element2:any) => {
                  console.log(element2.libelle);
                    this.GrpLibelle = element2.libelle;
              });
        });
        console.log(this.competences.GroupeCompetence);
    });
  }

  optionChoised(id: any) {
    // @ts-ignore
    if (id !== 'select a competence') {
      // console.log(id);
      this.competenceService.getCompetenceById(id).subscribe(competenceChoised => {
        this.competenceChoised = competenceChoised;
        // console.log(competenceChoised);
        this.idSelected = id;
        this.libelle = this.competenceChoised.libelle;

        this.niveau1 = this.competenceChoised.niveaux[0].niveau;
        this.criteres1 = this.competenceChoised?.niveaux[0].criteres;
        this.actions1 = this.competenceChoised?.niveaux[0].actions;

        this.niveau2 = this.competenceChoised.niveaux[1].niveau;
        this.criteres2 = this.competenceChoised?.niveaux[1].criteres;
        this.actions2 = this.competenceChoised?.niveaux[1].actions;

        this.niveau3 = this.competenceChoised.niveaux[2].niveau;
        this.criteres3 = this.competenceChoised?.niveaux[2].criteres;
        this.actions3 = this.competenceChoised?.niveaux[2].actions;
      });
    }
  }
}
