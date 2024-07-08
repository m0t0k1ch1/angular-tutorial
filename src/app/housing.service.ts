import { Injectable } from '@angular/core';

import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private readonly URL = 'http://localhost:3000/locations';

  constructor() {}

  public async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.URL);
    return (await data.json()) ?? [];
  }

  public async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    console.log(`${this.URL}/${id}`);

    const data = await fetch(`${this.URL}/${id}`);
    return (await data.json()) ?? {};
  }

  public submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Home application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }
}
