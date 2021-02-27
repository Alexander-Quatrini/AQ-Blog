import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostListComponent } from 'src/app/blog-post-selector/blog-post-list/blog-post-list.component';
import { IntroComponent } from 'src/app/intro/intro.component';

const routes: Routes = [
  {
    path: '', component: BlogPostListComponent 
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class BlogHomeRoutingModule { }
