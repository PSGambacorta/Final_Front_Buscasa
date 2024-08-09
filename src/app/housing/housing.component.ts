import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../service/housingLocation';

@Component({
  selector: 'app-housing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing.component.html',
  styleUrl: './housing.component.css'
})
export class HousingComponent {
  @Input() housingLocation!: HousingLocation;
}