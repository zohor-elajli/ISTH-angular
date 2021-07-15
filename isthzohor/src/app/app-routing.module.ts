import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { FilieresComponent } from './components/filieres/filieres.component';
import { ParametreComponent } from './components/parametre/parametre.component';
import { ProfesseursComponent } from './components/professeurs/professeurs.component';
import { SallesComponent } from './components/salles/salles.component';

const routes: Routes = [
  {path:"accueil",component:AcceuilComponent},//url acceuil pour afficher le component acceuil il faut ecrire url acceuil
  {path:"filieres",component:FilieresComponent},
  {path:"salles",component:SallesComponent},
  {path:"professeurs",component:ProfesseursComponent},
  {path:"parametre",component:ParametreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
