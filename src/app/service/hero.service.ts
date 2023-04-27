import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from 'src/app/model';
import { MessageService } from 'src/app/service/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`api/heroes`).pipe(
      tap((_) => this.log('heroes fetched')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  public getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`api/heroes/${id}`).pipe(
      tap((_) => this.log(`hero id=${id} fetched`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  public getHeroNo404(id: number): Observable<Hero> {
    return this.http.get<Hero[]>(`api/heroes?id=${id}`).pipe(
      map((heroes: Hero[]) => heroes[0]),
      tap((hero: Hero) =>
        this.log(`hero id={id} ${!!hero ? 'fetched' : 'not found'}`)
      ),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  public searchHeroes(term: string): Observable<Hero[]> {
    if (term.trim().length === 0) {
      return of([]);
    }

    return this.http.get<Hero[]>(`api/heroes?name=${term}`).pipe(
      tap((heroes: Hero[]) =>
        heroes.length > 0
          ? this.log(`heroes matching "${term}" found`)
          : this.log(`heroes matching "${term}" not found`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`api/heroes`, hero, this.HTTP_OPTIONS).pipe(
      tap((heroAdded: Hero) => this.log(`hero id=${heroAdded.id} added`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(`api/heroes`, hero, this.HTTP_OPTIONS).pipe(
      tap((_) => this.log(`hero id=${hero.id} updated`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  public deleteHero(id: number): Observable<Hero> {
    return this.http.delete<Hero>(`api/heroes/${id}`, this.HTTP_OPTIONS).pipe(
      tap((_) => this.log(`hero id=${id} deleted`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      console.error(err);
      this.log(`${operation} failed: ${err.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroeService: ${message}`);
  }
}
