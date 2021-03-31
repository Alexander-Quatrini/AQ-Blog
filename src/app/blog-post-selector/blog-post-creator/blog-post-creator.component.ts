import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-blog-post-creator',
  templateUrl: './blog-post-creator.component.html',
  styleUrls: ['./blog-post-creator.component.sass']
})
export class BlogPostCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
