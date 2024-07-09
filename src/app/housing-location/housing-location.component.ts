import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, MatRippleModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
