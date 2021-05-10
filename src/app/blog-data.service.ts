import { Injectable, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  private currentID = new Subject<string>();

  constructor( private http: HttpClient){}

  fetchBlog(id: string): Observable<BlogPostContent[]>{

    return this.http.get<BlogPostContent[]>('/api/posts/' + id);
  }

  fetchList(): Observable<BlogPostContent[]>{
    return this.http.get<BlogPostContent[]>('/api/posts');

  }

  updateServiceID(id: string): void{
    this.currentID.next(id);
  }

  fetchCurrentID(): Observable<string>{

    return this.currentID.asObservable();
  }

}

export interface BlogPostContent{

  id: string;
  author: string;
  imageURL: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  type: string;
  blog_slug: string;

}