import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { Post } from '../../models/post';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {

  //Variables globales
  public posts: any = []
  public edit: Boolean = false

  //Declaramos una variable con el cuerpo de nuestro model
  post: Post = {
    id: 0,
    title: '',
    body: ''
  }

  //Declaramos el Form group para usar nuestras validaciones
  formPost: FormGroup = this.fb.group({
    id: [''],
    title: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]] ,
    body: ['', [Validators.required, Validators.maxLength(150), Validators.minLength(1)]]
  })

  constructor(
    private api: ApiService, 
    private fb: FormBuilder, 
    public showAlert: AlertComponent   
    ) { }

  ngOnInit(): void {
    this.getAllPost()
  }

  //Optener los controls del formulario
  get postFormControl() {
    return this.formPost.controls;
  }

  //Funcion que nos ayuda a cambiar el estado de nuestro formulario
  editMode(post: Post) {
    this.edit = true
    
    //Llenamos el formulario con la selección
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
            this.showAlert.alertShow("Your post has been published", 3)
          },
          error => {
            console.log(error)
            this.showAlert.alertShow("Error in send post", 3)
          }
        )
      } else {
        this.api.updatePost(data, data.id).subscribe(
          res => {
            console.log("edit: " + res),
            this.getAllPost()
            this.formPost.reset()
            this.showAlert.alertShow("Your post is edit", 3)
          },
          error => {
            console.log(error)
            this.showAlert.alertShow("Error in send post", 3)
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
        this.showAlert.alertShow("Your post is delete", 3)
      },
      error => { 
        console.log("error")
        this.showAlert.alertShow("Error in delete your post", 3)
      }
    )
  }
}
