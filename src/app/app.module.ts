import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogPostSelectorModule } from './blog-post-selector/blog-post-selector.module'

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [ {path: '/posts', loadChildren:  () => import('./blog-post-view/blog-post-view.module').then(m => m.BlogPostViewModule)} ];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogPostSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
