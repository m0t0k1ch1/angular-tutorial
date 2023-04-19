import { Component } from '@angular/core';

import { Hero } from 'src/app/model';

import { HEROES } from 'src/app/mock';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
})
export class HeroesPageComponent {
  public heroes: Hero[] = HEROES;
  public heroSelected?: Hero;

  public onSelect(hero: Hero): void {
    this.heroSelected = hero;
  }
}
