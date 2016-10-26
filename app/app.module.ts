import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from './api/in-memory-store.service';
import './core/rxjs-extensions';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TvShowService } from './services/tvShows.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  providers: [
    TvShowService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
