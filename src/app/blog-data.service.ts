import { Injectable, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  private currentID: number = 0;

  constructor( private http: HttpClient){}

  fetchBlog(id: string): Observable<BlogPostContent[]>{

    this.currentID= Number(id);
    return this.http.get<BlogPostContent[]>('/api/posts/' + id);

  }

  fetchList(): Observable<BlogPostContent[]>{
    return this.http.get<BlogPostContent[]>('/api/posts');

  }

  fetchRelatedArticles(type: string): Observable<BlogPostContent[]>{
    return this.http.get<BlogPostContent[]>('/api/posts/' + this.currentID + '/' + type);
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