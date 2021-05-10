import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [ {path: 'posts/:id/:slug', loadChildren:  () => import('./blog-post-view/blog-post-view.module').then(m => m.BlogPostViewModule)},
                          {path: 'home', loadChildren: () => import('./blog-home/blog-home.module').then(m=> m.BlogHomeModule)}, 
                          {path: '', redirectTo: 'home', pathMatch: 'full'}];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
