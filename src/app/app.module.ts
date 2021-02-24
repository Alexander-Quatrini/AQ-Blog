import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogPostSelectorModule } from './blog-post-selector/blog-post-selector.module'

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BlogPostSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
