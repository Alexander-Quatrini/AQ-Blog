import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

interface BlogPost {
  id: string;
  author: string;
  imageURL: string;
  date: string;
  title: string;
  content: string;
  summary: string;
  blog_slug: string;
}

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.sass']
})

@Injectable()
export class BlogPostListComponent implements OnInit {

  posts$!: Observable<BlogPost[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.posts$ = this.http.get<BlogPost[]>("/api/posts").pipe(map(data => _.values(data)));

  }
}
