import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Post } from '../../models/post';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {

  posts: any = []
  alert: string = ""
  edit: boolean = false

  post: Post = {
    id: 0,
    title: '',
    body: ''
  }

  form: FormGroup = this.fb.group({
    id: [''],
    title: ['', Validators.required] ,
    body: ['', Validators.required]
  })

  constructor( private api:ApiService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getAllPost()
  }

  editMode(post: Post) {
    this.edit = true
    this.form.setValue({
      id: post.id,
      title: post.title,
      body: post.body
    })
  }

  //methods
  getAllPost() {
    this.api.getAllPost().subscribe(
      res => this.posts = res,
      error => console.log(error)
    );
  }

  createPost(data: Post) {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.edit == false) {
        this.api.createPost(data).subscribe(
          res => {
            console.log("create: " + res),
              this.getAllPost()
            this.form.reset()
            this.alert = "Your post is publish"
          },
          error => {
            console.log(error)
            this.alert = "Error in send post"
          }
        )
      }else {
        this.api.updatePost(data, data.id).subscribe(
          res => {
            console.log("edit: " + res),
            this.getAllPost()
            this.form.reset()
            this.alert = "Your post is edit"
          },
          error => {
            console.log(error)
            this.alert = "Error in send post"
          }
        )
        this.edit = false
      }
    }
  } 

  deletePost(id :number) {
    this.api.deletePost(id).subscribe(
      res => { 
        console.log("success") 
        this.getAllPost()
        this.alert = "Your post is delete"
      },
      error => { 
        console.log("error")
        this.alert = "Error in delete your post "
      }
    )
  }
}
