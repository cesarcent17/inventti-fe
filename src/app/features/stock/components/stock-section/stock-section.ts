import { Component } from '@angular/core';
import { StockTable } from '../stock-table/stock-table';

@Component({
  selector: 'app-stock-section',
  imports: [StockTable],
  templateUrl: './stock-section.html',
  styleUrl: './stock-section.css'
})
export class StockSection {
   baseClass: string = 'stock-section';
}
