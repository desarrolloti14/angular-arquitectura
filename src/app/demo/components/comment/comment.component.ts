import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../../models/comment';
import { ApiService } from '../../service/api.service';

@Component({
  //providers: [PostComponent],
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit {

  //Objeto enviado por componente padre
  @Input() postts: any;

  comments: any

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
    comment: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private api :ApiService) { }

  ngOnInit(): void {
    this.getAllComment()
  }

  getAllComment() {
    this.api.getComment(this.postts.id).subscribe(
      res => console.log(this.comments = res),
      error => console.log(error)
    )
  }

  createComment(data: any) {
    //Concatenamos el objeto postts con data
    data.post = this.postts;
    delete data.post["comments"]
    this.api.createComment(data).subscribe(
      res => {
        console.log("Create: " + res)
        this.formComment.reset()
        this.getAllComment()
      },
      error => {
        console.log("Error: " + error)
      }
    );
  }

  deleteComment(id: number) {
    this.api.deleteComment(id).subscribe(
      res => {
        console.log("Delete: " + res)
        this.formComment.reset()
        this.getAllComment()
      },
      error => {
        console.log("Error: " + error)
      }
    )
  }

}
