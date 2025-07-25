import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UbicacionService } from '../../services/ubicacion-service';

@Component({
  selector: 'app-ubicacion-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  templateUrl: './ubicacion-editar-modal.html',
  styleUrls: ['./ubicacion-editar-modal.css']
})
export class UbicacionEditarModal {
  @Input() visible: boolean = false;
  @Input() ubicacion: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableUbicacion: any = {
    codigoPercha: '',
    descripcion: '',
  };

    baseClass: string = 'ubicacion-editar-modal';



  constructor(private ubicacionService: UbicacionService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ubicacion'] && this.ubicacion) {
      // Hacemos una copia para edición local
      this.editableUbicacion = { ...this.ubicacion };
    }
  }
  guardar() {
    console.log('Guardando ubicación', this.ubicacion);
    this.ubicacionService.actualizarUbicacion(this.ubicacion).subscribe({
      next: () => {
        this.visibleChange.emit(false);
        this.onGuardar.emit();
      },
      error: (err) => {
        console.error('Error al actualizar ubicación', err);
      }
    });
  }

  cerrar() {
    this.visibleChange.emit(false);
  }
}
