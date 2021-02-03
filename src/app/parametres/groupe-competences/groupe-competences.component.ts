import { Component, OnInit } from '@angular/core';
import { GrpCompetenceService } from 'src/app/service/grp-competence.service';

@Component({
  selector: 'app-groupe-competences',
  templateUrl: './groupe-competences.component.html',
  styleUrls: ['./groupe-competences.component.scss']
})
export class GroupeCompetencesComponent implements OnInit {

  GET: any;

  constructor(private grpCompetence: GrpCompetenceService) {
  }


  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void{
    this.grpCompetence.getAllGrpCompetence().subscribe(
      data =>{
        this.GET = data ;

        console.log(this.GET);

        // this.content = this.content['hydra:member'];
      },
      error =>{
        alert('probléme d\'accés');
        console.log(error);
      }
    )
  }

}
