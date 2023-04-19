import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/model';
import { MessageService } from 'src/app/service/message.service';

const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

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
