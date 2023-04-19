import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DashboardPageComponent } from './component/page/dashboard-page/dashboard-page.component';
import { HeroesPageComponent } from './component/page/heroes-page/heroes-page.component';
import { HeroPageComponent } from './component/page/hero-page/hero-page.component';

import { MessagesComponent } from './component/element/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,

    DashboardPageComponent,
    HeroesPageComponent,
    HeroPageComponent,

    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
