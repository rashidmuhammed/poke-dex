import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ButtonComponent } from './componenets/button/button.component';
import { AboutusComponent } from './componenets/aboutus/aboutus.component';
import { FilesComponent } from './componenets/files/files.component';
import { SocialComponent } from './componenets/social/social.component';
import { LoginComponent } from './componenets/login/login.component';
import { FormsModule } from '@angular/forms';
import { SinglepageComponent } from './componenets/singlepage/singlepage.component';
import { LocationdetailsComponent } from './componenets/locationdetails/locationdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AboutusComponent,
    FilesComponent,
    SocialComponent,
    LoginComponent,
    SinglepageComponent,
    LocationdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
