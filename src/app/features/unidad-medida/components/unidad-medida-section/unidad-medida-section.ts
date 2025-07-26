import { Component } from '@angular/core';
import { UnidadMedidaTable } from '../unidad-medida-table/unidad-medida-table';

@Component({
  selector: 'app-unidad-medida-section',
  imports: [UnidadMedidaTable],
  templateUrl: './unidad-medida-section.html',
  styleUrl: './unidad-medida-section.css'
})
export class UnidadMedidaSection {
   baseClass: string = 'unidad-medida-section';
}
