import { Component } from '@angular/core';
import { PasilloTable } from '../pasillo-table/pasillo-table';

@Component({
  selector: 'app-pasillo-section',
  imports: [PasilloTable],
  templateUrl: './pasillo-section.html',
  styleUrl: './pasillo-section.css'
})
export class PasilloSection {
  baseClass: string = 'pasillo-section';
}
