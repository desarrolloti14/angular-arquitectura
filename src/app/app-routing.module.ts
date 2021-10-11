import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Creamos las rutas de la aplicacion, usaremos Lazy load para no sebre cargar la app
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'api', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  //Redireccionamos si la ruta no es valida
  { path: '**', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
