import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { FilieresComponent } from './components/filieres/filieres.component';
import { SallesComponent } from './components/salles/salles.component';
import { ProfesseursComponent } from './components/professeurs/professeurs.component';
import { ParametreComponent } from './components/parametre/parametre.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AcceuilComponent,
    FilieresComponent,
    SallesComponent,
    ProfesseursComponent,
    ParametreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
