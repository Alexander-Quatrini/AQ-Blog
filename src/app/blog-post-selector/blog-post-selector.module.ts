import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component'

@NgModule({
  declarations: [BlogPostListComponent, BlogPostPreviewComponent],
  imports: [
    CommonModule
  ],

  exports: [BlogPostListComponent]
})
export class BlogPostSelectorModule { }
