import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [ {path: 'posts', loadChildren:  () => import('./blog-post-view/blog-post-view.module').then(m => m.BlogPostViewModule)},
                         {path: '', redirectTo: '', pathMatch: 'full'} ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
