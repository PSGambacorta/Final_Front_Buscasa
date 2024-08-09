import { Injectable } from '@angular/core';
import { HousingLocation } from './housingLocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/api/casas';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: any): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log('Reserva recivida: ' + firstName + ' ' + lastName + ' ' + email);
  }
}
