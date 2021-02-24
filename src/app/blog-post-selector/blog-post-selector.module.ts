import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';



@NgModule({
  declarations: [BlogPostPreviewComponent],
  imports: [
    CommonModule
  ],

  exports: [BlogPostPreviewComponent]
})
export class BlogPostSelectorModule { }
