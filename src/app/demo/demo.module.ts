import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { PostComponent } from './components/post/post.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    PostComponent,
    IndexComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
