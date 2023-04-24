import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './component/layout/main-layout/main-layout.component';

import { DashboardPageComponent } from './component/page/dashboard-page/dashboard-page.component';
import { HeroesPageComponent } from './component/page/heroes-page/heroes-page.component';
import { HeroPageComponent } from './component/page/hero-page/hero-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'heroes', component: HeroesPageComponent },
      { path: 'heroes/:id', component: HeroPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
