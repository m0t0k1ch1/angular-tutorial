import { Component, Input } from '@angular/core';

import { Hero } from 'src/app/model';

@Component({
  selector: 'app-hero-chip',
  templateUrl: './hero-chip.component.html',
  styleUrls: ['./hero-chip.component.scss'],
})
export class HeroChipComponent {
  @Input() hero?: Hero;
}
