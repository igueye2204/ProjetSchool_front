import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders, TokenInterceptorInterceptor } from './helpers/token-interceptor.interceptor';

import { Routes, RouterModule } from '@angular/router';


// used to create fake backend

import  {JwtService} from './service/jwt.service';
import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
 import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './profil/profil.component';
import { GetProfilComponent } from './profil/get-profil/get-profil.component';
import { PostProfilComponent } from './profil/post-profil/post-profil.component';
import { ParametresComponent } from './parametres/parametres.component';
import { PromoComponent } from './parametres/promo/promo.component';
import { ReferentielsComponent } from './parametres/referentiels/referentiels.component';
import { GroupeCompetencesComponent } from './parametres/groupe-competences/groupe-competences.component';
import { GroupeTagsComponent } from './parametres/groupe-tags/groupe-tags.component';
import { ProfilSortieComponent } from './parametres/profil-sortie/profil-sortie.component';
import { CompetencesComponent } from './parametres/competences/competences.component';
import { UsersComponent } from './users/users.component';
import { GetUsersComponent } from './users/get-users/get-users.component';
import { PostUsersComponent } from './users/post-users/post-users.component';
import { NgbModule }from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { SummarizePipe } from './pipes/summarize.pipe';
import { PostGrpcompetenceComponent } from './parametres/groupe-competences/post-grpcompetence/post-grpcompetence.component';
import { EditGrpcompetenceComponent } from './parametres/groupe-competences/edit-grpcompetence/edit-grpcompetence.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { PostProfilSortieComponent } from './parametres/profil-sortie/post-profil-sortie/post-profil-sortie.component';
import { EditProfilSortieComponent } from './parametres/profil-sortie/edit-profil-sortie/edit-profil-sortie.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NgbModule,
        NgxPaginationModule,
        NgMultiSelectDropDownModule.forRoot(),
        NgSelectModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        BoardAdminComponent,
        BoardUserComponent,
        ProfileComponent,
        ProfilComponent,
        GetProfilComponent,
        PostProfilComponent,
        ParametresComponent,
        PromoComponent,
        ReferentielsComponent,
        GroupeCompetencesComponent,
        GroupeTagsComponent,
        ProfilSortieComponent,
        CompetencesComponent,
        UsersComponent,
        GetUsersComponent,
        PostUsersComponent,
        EditProfilComponent,
        EditUsersComponent,
        SummarizePipe,
        PostGrpcompetenceComponent,
        EditGrpcompetenceComponent,
        PostProfilSortieComponent,
        EditProfilSortieComponent

    ],
    providers: [
        JwtService,
        authInterceptorProviders
         // provider used to create fake backend
        ],
    bootstrap: [AppComponent]
})
export class AppModule { };
