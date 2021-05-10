import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BlogDataService, BlogPostContent } from 'src/app/blog-data.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
@Injectable()
export class BlogPostComponent implements OnInit {

  blogPostData$!: Observable<BlogPostContent[]>;

  relatedPosts$!: Observable<BlogPostContent[]>;

  selectedId!: string;
  type!: string;

  constructor(public router:Router, private http: HttpClient, private dataService: BlogDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {this.selectedId = data.id; this.blogPostData$ = this.dataService.fetchBlog(this.selectedId);})
    this.route.params.subscribe(data => {this.type = data.type; this.relatedPosts$ = this.dataService.fetchRelatedArticles(this.type);})
  }

title: string ="";
content: string ="";

}
