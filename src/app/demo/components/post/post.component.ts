import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Post } from '../../models/post';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {

  //Variables globales
  posts: any = []
  alert: string = ""
  edit: boolean = false

  //Declaramos una variable con el cuerpo de nuestro model
  post: Post = {
    id: 0,
    title: '',
    body: ''
  }

  //Declaramos el Form group para usar nuestras validaciones
  formPost: FormGroup = this.fb.group({
    id: [''],
    title: ['', Validators.required] ,
    body: ['', Validators.required]
  })

  constructor(private api: ApiService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getAllPost()
  }

  //Funcion que nos ayuda a cambiar el estado de nuestro formulario
  editMode(post: Post) {
    this.edit = true
    this.formPost.setValue({
      id: post.id,
      title: post.title,
      body: post.body
    })
  }

  //Funcion para mostrar todos los registros
  getAllPost() {
    this.api.getAllPost().subscribe(
      res => this.posts = res,
      error => console.log(error)
    );
  }

  //Funcion para crear y/o editar registros
  createPost(data: Post) {
    this.formPost.markAllAsTouched();

    //Validamos que el formulario sea correcto
    if (this.formPost.valid) {

      //Validamos que el estado del formulario
      if (this.edit == false) {
        this.api.createPost(data).subscribe(
          res => {
            console.log("create: " + res),
              this.getAllPost()
            this.formPost.reset()
            this.alert = "Your post is publish"
          },
          error => {
            console.log(error)
            this.alert = "Error in send post"
          }
        )
      } else {
        this.api.updatePost(data, data.id).subscribe(
          res => {
            console.log("edit: " + res),
            this.getAllPost()
            this.formPost.reset()
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

  //Funcion para eliminar registros
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
