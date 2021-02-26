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

  changeURL($url: string): void {
    const navigationDetails: string[] = [$url];

    //this.router.navigate(navigationDetails);
  }

  @Input() title: string = "";
  @Input() imageSource: string = "";
  @Input() url: string = "/posts"

}
