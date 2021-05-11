import { Component, Injectable, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { finalize, switchMap, take } from 'rxjs/operators';
import { BlogDataService, BlogPostContent } from 'src/app/blog-data.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
@Injectable()
export class BlogPostComponent implements OnInit, OnDestroy {

  blogPostDataSubscription!: Subscription;
  blogPostData$!: Observable<BlogPostContent[]>;
  relatedPostsSubscription!: Subscription;
  relatedPosts$!: Observable<BlogPostContent[]>;

  selectedId!: string;
  type!: string;

  loading: boolean = true
  loadingRelated: boolean = true

  constructor(public router:Router, private http: HttpClient, private dataService: BlogDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogPostDataSubscription = this.route.params.pipe(finalize(() => {this.loading = false;})).subscribe(data => {this.selectedId = data.id; this.blogPostData$ = this.dataService.fetchBlog(this.selectedId);})
    this.relatedPostsSubscription = this.route.params.pipe(finalize(() => {this.loadingRelated = false;})).subscribe(data => {this.type = data.type; this.relatedPosts$ = this.dataService.fetchRelatedArticles(this.type);})
  }

  ngOnDestroy(): void{
    this.blogPostDataSubscription.unsubscribe();
    this.relatedPostsSubscription.unsubscribe();
  }

title: string ="";
content: string ="";

}
