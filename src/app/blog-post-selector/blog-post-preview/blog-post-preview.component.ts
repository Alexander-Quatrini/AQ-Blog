import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from 'src/app/blog-data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.sass']
})

@Injectable()
export class BlogPostPreviewComponent implements OnInit {

  constructor(private dataService: BlogDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  @Input() id: string = "1";
  @Input() title: string = "";
  @Input() imageSource: string = "";
  @Input() url: string = "/posts";
  @Input() postSummary: string = "";
  @Input() type: string = "default";

}
