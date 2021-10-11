import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  //Creamos las rutas para cada modulo
  { path: 'home', component:HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'review', component:ReviewComponent },
  //Redireccionamos si la ruta no es valida
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
