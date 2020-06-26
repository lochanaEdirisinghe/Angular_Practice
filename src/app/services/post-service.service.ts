import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../dto/Post";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }


  getAll():Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  save(post: Post):Observable<boolean>{
    return this.http.post<boolean>('https://jsonplaceholder.typicode.com/posts', post )
  }

  update(post:Post):Observable<boolean>{
    return this.http.put<boolean>('https://jsonplaceholder.typicode.com/posts/1', post)
  }

  search(id:string):Observable<Post>{
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts')
  }
  delete(id:string):Observable<boolean>{
    return this.http.delete<boolean>('https://jsonplaceholder.typicode.com/posts/posts/1')
  }
}
