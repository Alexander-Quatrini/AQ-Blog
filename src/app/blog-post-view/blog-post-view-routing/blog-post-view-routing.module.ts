import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostComponent } from '../blog-post/blog-post.component'

const routes: Routes = [
  {
    path: 'posts',
    component: BlogPostComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogPostViewRoutingModule { }
