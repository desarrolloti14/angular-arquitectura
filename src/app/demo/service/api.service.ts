import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:8081/api/demo/";

  constructor( private http:HttpClient ) { }

  //Metodos CRUD para las peticiones posts
  getAllPost() {
    return this.http.get(this.url + "posts");
  }

  getPost(id: number) {
    return this.http.get(this.url + "posts/" + id);
  }

  createPost(post: Post) {
    return this.http.post(this.url + "posts", post);
  }

  updatePost(post: Post, id: number) {
    return this.http.put(this.url + "posts/" + id, post)
  }

  deletePost(id: number) {
    return this.http.delete(this.url + "posts/" + id);
  }

  //Metodos CRUD para las peticiones comments
  getComment(id: number) {
    return this.http.get(this.url + "comments/" + id)
  }

  createComment(comment: Comment) {
    return this.http.post(this.url + "comments/", comment);
  }

  deleteComment(id: number) {
    return this.http.delete(this.url + "comments/" + id);
  }
}
