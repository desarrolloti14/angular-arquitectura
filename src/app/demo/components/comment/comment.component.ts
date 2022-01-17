import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../../models/comment';
import { ApiService } from '../../service/api.service';
import { PostComponent } from '../post/post.component';

@Component({
  providers: [PostComponent],
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit {

  //Objeto enviado por componente padre
  @Input() postts: any;

  public comments: any
  public secondM: any
  public diff: any
  public alert: Boolean = false

  //Declaramos una variable con el cuerpo de nuestro model
  comment: Comment = {
    id: 0,
    comment: '',
    post: {
      post_id: 0
    }
  }

  //Declaramos el Form group para usar nuestras validaciones
  formComment: FormGroup = this.fb.group({
    id: [''],
    comment: ['', [Validators.required, Validators.maxLength(150), Validators.minLength(1)]],
  })

  constructor(
    private fb: FormBuilder, 
    private api :ApiService, 
    private componentPost: PostComponent,
    ) { }

  ngOnInit(): void {
    this.getAllComment()
  }

  secondDiff(secondP: Date): any {
    this.secondM = new Date()
    this.diff = this.secondM.getSeconds() - secondP.getSeconds();
    if (this.diff < 10) {
      return "jajaja";
    }
    return "khsbvhdabv dsbvhev"
  }

  //Optener los controls del formulario
  get commentFormControl() {
    return this.formComment.controls;
  }

  getAllComment() {
    this.api.getComment(this.postts.id).subscribe(
      res => console.log(this.comments = res),
      error => console.log(error)
    )
  }

  createComment(data: any) {
    //Concatenamos el objeto postts con data
    this.formComment.markAllAsTouched() 
    if (this.formComment.valid) {
      data.post = this.postts;
      delete data.post["comments"]
      this.api.createComment(data).subscribe(
        res => {
          this.alert = true
          console.log("Create: " + res)
          this.formComment.reset()
          this.getAllComment()
          this.alert = false 
        },
        error => {
          console.log("Error: " + error)
          //this.alertShow.alertShow("Error in publish your comment", 3)
        }
      );
    }
  }

  deleteComment(id: number) {
    this.api.deleteComment(id).subscribe(
      res => {
        console.log("Delete: " + res)
        this.formComment.reset()
        this.getAllComment()
        //this.alertShow.alertShow("Your comment has been deleted", 3)
      },
      error => {
        console.log("Error: " + error)
        //this.alertShow.alertShow("Error in deleted your comment", 3)
      }
    )
  }

}
