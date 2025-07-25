import { Component } from '@angular/core';
import { UbicacionTable } from '../ubicacion-table/ubicacion-table';

@Component({
  selector: 'app-ubicacion-section',
  imports: [UbicacionTable],
  templateUrl: './ubicacion-section.html',
  styleUrl: './ubicacion-section.css'
})
export class UbicacionSection {
    baseClass: string = 'ubicacion-section';

}
