import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GetProfilComponent } from './profil/get-profil/get-profil.component';
import { PostProfilComponent } from './profil/post-profil/post-profil.component';
import { ParametresComponent } from './parametres/parametres.component';
import { PromoComponent } from './parametres/promo/promo.component';
import { ReferentielsComponent } from './parametres/referentiels/referentiels.component';
import { ProfilSortieComponent } from './parametres/profil-sortie/profil-sortie.component';
import { GroupeCompetencesComponent } from './parametres/groupe-competences/groupe-competences.component';
import { CompetencesComponent } from './parametres/competences/competences.component';
import { UsersComponent } from './users/users.component';
import { ProfilComponent } from './profil/profil.component';
import { GetUsersComponent } from './users/get-users/get-users.component';
import { PostUsersComponent } from './users/post-users/post-users.component';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { PostGrpcompetenceComponent } from './parametres/groupe-competences/post-grpcompetence/post-grpcompetence.component';
import { PostProfilSortieComponent } from './parametres/profil-sortie/post-profil-sortie/post-profil-sortie.component';
import { EditProfilSortieComponent } from './parametres/profil-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { DeletedUsersComponent } from './users/deleted-users/deleted-users.component';
import { DeletedProfilComponent } from './profil/deleted-profil/deleted-profil.component';
import { DeleteProfilComponent } from './parametres/profil-sortie/profilSortie/delete-profil/delete-profil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'admin',
    component: UsersComponent ,
      children:[
        {
          path: 'users',
            children: [
              { path: '', component: UsersComponent },
              { path: 'edituser/:id', component: EditUsersComponent },
              { path: 'detailuser/:id', component: UserDetailComponent },
              { path: 'listuser', component: GetUsersComponent },
              { path: 'listuserdeleted', component: DeletedUsersComponent },
              { path: 'adduser', component: PostUsersComponent }
            ]
        },
        {
          path: 'profil',
            children:[
              { path: '', component: ProfilComponent },
              { path: 'editprofil/:id', component: EditProfilComponent },
              { path: 'listprofil', component: GetProfilComponent },
              { path: 'listprofildeleted', component: DeletedProfilComponent },
              { path: 'addprofil', component: PostProfilComponent }
            ]
        }
      ],
  },

  {
    path: 'parametres',
    component: ParametresComponent,
      children: [
        {
          path: 'groupecompetences',
            children:[
              { path: '', component: GroupeCompetencesComponent },
              { path: 'addgrpcompetence', component: PostGrpcompetenceComponent }
            ]
        },
        { path: 'promos', component: PromoComponent },
        { path: 'referentiels', component: ReferentielsComponent },
        { path: 'competences', component: CompetencesComponent },
        {
          path: 'profilsorties',
          children:[
            { path: '', component: ProfilSortieComponent },
            { path: 'editprofilsortie/:id', component: EditProfilSortieComponent },
            { path: 'listprofilsortiedeleted', component: DeleteProfilComponent },
            { path: 'addprofilsortie', component: PostProfilSortieComponent }
          ]
        }
      ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
