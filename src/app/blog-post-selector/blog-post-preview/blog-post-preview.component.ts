import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.sass']
})

@Injectable()
export class BlogPostPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string = "";
  @Input() imageSource: string = "";
  @Input() url: string = "/posts"

}
