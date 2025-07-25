import { Component } from '@angular/core';
import { ProductoTable } from '../producto-table/producto-table';

@Component({
  selector: 'app-producto-section',
  imports: [ProductoTable],
  templateUrl: './producto-section.html',
  styleUrl: './producto-section.css'
})
export class ProductoSection {
    baseClass: string = 'producto-section';

}
