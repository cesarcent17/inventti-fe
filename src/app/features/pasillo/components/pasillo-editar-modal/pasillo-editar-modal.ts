// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pasillo-editar-modal',
//   imports: [],
//   templateUrl: './pasillo-editar-modal.html',
//   styleUrl: './pasillo-editar-modal.css'
// })
// export class PasilloEditarModal {

// }


import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PasilloService } from '../../services/pasillo-service';

@Component({
  selector: 'app-pasillo-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  templateUrl: './pasillo-editar-modal.html',
  styleUrls: ['./pasillo-editar-modal.css']
})
export class PasilloEditarModal {
  @Input() visible: boolean = false;
  @Input() pasillo: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editablepasillo: any = {
    nombre: '',
    descripcion: '',
    estado: ''
  };

    baseClass: string = 'pasillo-editar-modal';



  constructor(private pasilloService: PasilloService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pasillo'] && this.pasillo) {
      // Hacemos una copia para edición local
      this.editablepasillo = { ...this.pasillo };
    }
  }
  guardar() {
    console.log('Guardando pasillo', this.pasillo);
    this.pasilloService.actualizarPasillo(this.pasillo).subscribe({
      next: () => {
        this.visibleChange.emit(false);
        this.onGuardar.emit();
      },
      error: (err) => {
        console.error('Error al actualizar el pasillo', err);
      }
    });
  }

  cerrar() {
    this.visibleChange.emit(false);
  }
}
