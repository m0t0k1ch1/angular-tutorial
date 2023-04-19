import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/model';
import { MessageService } from 'src/app/service/message.service';

import { HEROES } from 'src/app/mock';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  public getHeroes(): Observable<Hero[]> {
    const heroes = HEROES;

    this.messageService.add('HeroService: heroes fetched');

    return of(heroes);
  }

  public getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;

    this.messageService.add(`HeroService: hero id=${id} fetched`);

    return of(hero);
  }
}
