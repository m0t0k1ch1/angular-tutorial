import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingLocation } from '../housing-location';

import { HousingService } from '../housing.service';

import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private housingService: HousingService = inject(HousingService);

  public housingLocations: HousingLocation[] = [];

  constructor() {
    this.housingLocations = this.housingService.getAllHousingLocations();
  }
}
