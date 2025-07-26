import { Component } from '@angular/core';
import { EstanteTable } from '../estante-table/estante-table';

@Component({
  selector: 'app-estante-section',
  imports: [EstanteTable],
  templateUrl: './estante-section.html',
  styleUrl: './estante-section.css'
})
export class EstanteSection {
  baseClass: string = 'estante-section';
}
