import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeroesPageComponent } from './component/page/heroes-page/heroes-page.component';

import { HeroDetailComponent } from './component/element/hero-detail/hero-detail.component';
import { MessagesComponent } from './component/element/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,

    HeroesPageComponent,

    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
