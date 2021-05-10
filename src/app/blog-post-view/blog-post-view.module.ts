import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostViewRoutingModule } from './blog-post-view-routing/blog-post-view-routing.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BlogPostViewRoutingModule,
    RouterModule,
  ],
  declarations: [BlogPostComponent],
})
export class BlogPostViewModule { }
