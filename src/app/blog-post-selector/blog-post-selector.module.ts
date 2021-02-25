import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';
import { BlogPostCreatorComponent } from './blog-post-creator/blog-post-creator.component'

@NgModule({
  declarations: [BlogPostListComponent, BlogPostPreviewComponent, BlogPostCreatorComponent],
  imports: [
    FormsModule,
    CommonModule
  ],

  exports: [BlogPostListComponent]
})
export class BlogPostSelectorModule { }
