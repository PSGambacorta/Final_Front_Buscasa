import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HousingComponent } from '../housing/housing.component';
import { HousingService } from '../service/housing.service';
import { HousingLocation } from '../service/housingLocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HousingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchInput: string = '';
  url = 'http://localhost:3000/api/casas';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

/*   async displayResults(searchInput: any) {

    const data = await fetch(this.url);
    console.log('En el cuadro se ingreso:', this.searchInput)
    return await data.json() ?? [];
  }; */

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
    });
  }
}
