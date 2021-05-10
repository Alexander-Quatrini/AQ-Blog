import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogPostSelectorModule } from './blog-post-selector/blog-post-selector.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BlogPostViewModule } from './blog-post-view/blog-post-view.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogPostSelectorModule,
    AppRoutingModule,
    BlogPostViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
