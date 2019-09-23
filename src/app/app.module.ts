import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsListComponent } from './news-list/news-list.component';
import { CategoryAsideComponent } from './category-aside/category-aside.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsListComponent,
    CategoryAsideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
