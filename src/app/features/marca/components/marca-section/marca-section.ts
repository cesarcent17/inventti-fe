import { Component } from '@angular/core';
import { MarcaTable } from '../marca-table/marca-table';

@Component({
  selector: 'app-marca-section',
  imports: [MarcaTable],
  templateUrl: './marca-section.html',
  styleUrl: './marca-section.css'
})
export class MarcaSection {
    baseClass: string = 'marca-section';

}
