import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';/* 
import { authInterceptorProviders } from './helpers/auth.interceptor';  */


// used to create fake backend

import  {JwtService} from '../app/service/jwt.service';
import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component'; 
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
 import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BoardAdminComponent,
        BoardUserComponent,
        ProfileComponent,
    ],
    providers: [
        JwtService
        /* authInterceptorProviders */
         // provider used to create fake backend
        ],
    bootstrap: [AppComponent]
})
export class AppModule { };