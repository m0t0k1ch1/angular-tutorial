import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MainLayoutComponent } from './component/layout/main-layout/main-layout.component';

import { DashboardPageComponent } from './component/page/dashboard-page/dashboard-page.component';
import { HeroesPageComponent } from './component/page/heroes-page/heroes-page.component';
import { HeroPageComponent } from './component/page/hero-page/hero-page.component';

import { MessagesComponent } from './component/element/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,

    MainLayoutComponent,

    DashboardPageComponent,
    HeroesPageComponent,
    HeroPageComponent,

    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
