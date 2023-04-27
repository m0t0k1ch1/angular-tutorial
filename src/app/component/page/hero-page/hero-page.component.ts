import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Hero } from 'src/app/model';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.initHero();
  }

  private initHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getHero(id).subscribe((hero: Hero) => (this.hero = hero));
  }

  public save(): void {
    if (!this.hero) {
      return;
    }

    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  public delete(): void {
    if (!this.hero) {
      return;
    }

    this.heroService.deleteHero(this.hero.id).subscribe(() => this.goBack());
  }

  public goBack(): void {
    this.location.back();
  }
}
