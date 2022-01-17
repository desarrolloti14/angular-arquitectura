import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { LoadComponent } from './load/load.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    LoadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ]
})
export class SharedModule { }
