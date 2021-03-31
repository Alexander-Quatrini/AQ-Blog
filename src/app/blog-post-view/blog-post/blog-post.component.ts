import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {

  constructor(public router:Router) { }

  urlTitle = this.router.url.substr(7) as string;  

  ngOnInit(): void {

  }

}
