import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { ButtonComponent } from './componenets/button/button.component';
import { FilesComponent } from './componenets/files/files.component';
import { LoginComponent } from './componenets/login/login.component';
import { SinglepageComponent } from './componenets/singlepage/singlepage.component';
import { SocialComponent } from './componenets/social/social.component';
import { AuthguardGuard } from './shared/authguard.guard';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'social' , component:SocialComponent,canActivate:[AuthguardGuard]},
  {path:'files' , component:FilesComponent,canActivate:[AuthguardGuard]},
  {path:'button',component:ButtonComponent,canActivate:[AuthguardGuard]},
  {path:'details/:id',component:SinglepageComponent,canActivate:[AuthguardGuard]}
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
