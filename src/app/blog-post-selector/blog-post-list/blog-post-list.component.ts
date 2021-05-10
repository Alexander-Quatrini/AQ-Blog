import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BlogDataService, BlogPostContent } from 'src/app/blog-data.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.sass']
})

@Injectable()
export class BlogPostListComponent implements OnInit {

  posts$!: Observable<BlogPostContent[]>;

  constructor(private http: HttpClient, private blogService: BlogDataService) {
  }

  ngOnInit(): void {
    this.posts$ = this.blogService.fetchList();

  }
  
}
