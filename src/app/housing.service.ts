import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private http: HttpClient = inject(HttpClient);

  private readonly URL = 'http://localhost:3000/locations';

  constructor() {}

  public async getAllHousingLocations(): Promise<HousingLocation[]> {
    return firstValueFrom(this.http.get<HousingLocation[]>(this.URL));
  }

  public async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    return firstValueFrom(this.http.get<HousingLocation>(`${this.URL}/${id}`));
  }

  public submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Home application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }
}
