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
    const heroes = of(HEROES);

    this.messageService.add('HeroService: heroes fetched');

    return heroes;
  }
}
