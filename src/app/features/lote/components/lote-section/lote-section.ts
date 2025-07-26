import { Component } from '@angular/core';
import { LoteTable } from '../lote-table/lote-table';

@Component({
  selector: 'app-lote-section',
  imports: [LoteTable],
  templateUrl: './lote-section.html',
  styleUrl: './lote-section.css'
})
export class LoteSection {
  baseClass: string = 'lote-section';
}
