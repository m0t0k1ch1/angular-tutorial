import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/model';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
})
export class HeroesPageComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.initHeroes();
  }

  private initHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes: Hero[]) => (this.heroes = heroes));
  }

  public addHero(name: string): void {
    name = name.trim();

    if (name.length === 0) {
      return;
    }

    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes.push(hero));
  }
}
