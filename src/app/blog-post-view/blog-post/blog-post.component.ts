import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

interface BlogPostContent{
  content: string;
  type: string;
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {

  content$!: BlogPostContent[];
  

  constructor(public router:Router, private http: HttpClient) { }

  urlTitle = this.router.url.substr(7) as string;  

  ngOnInit(): void {

    this.http.get<BlogPostContent[]>("/api/posts/" + this.id).subscribe(data => {this.content$ = {
      ...data
    }

    console.log(this.content$);
    });

  }

@Input() title: string = "Unknown Title";
@Input() contentDefault: string = "You should not be seeing this.";
@Input() id: string = "1";
}
