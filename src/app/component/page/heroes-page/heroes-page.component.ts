import { Component } from '@angular/core';

import { Hero } from 'src/app/model';
import { HeroService } from 'src/app/service/hero.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
})
export class HeroesPageComponent {
  public heroes: Hero[] = [];
  public heroSelected?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initHeroes();
  }

  public initHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes: Hero[]) => (this.heroes = heroes));
  }

  public onHeroSelected(hero: Hero): void {
    this.heroSelected = hero;
    this.messageService.add(`HeroesPageComponent: hero id=${hero.id} selected`);
  }
}
