import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HousingLocation } from '../housing-location';

import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);

  private housingService: HousingService = inject(HousingService);

  public housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationID = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationID);
  }
}
