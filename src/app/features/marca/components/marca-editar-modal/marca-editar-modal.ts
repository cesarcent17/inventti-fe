import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MarcaService } from '../../services/marca-service';

@Component({
  selector: 'app-marca-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  templateUrl: './marca-editar-modal.html',
  styleUrls: ['./marca-editar-modal.css']
})
export class MarcaEditarModal {
  @Input() visible: boolean = false;
  @Input() marca: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableMarca: any = {
    nombre: '',
    descripcion: ''
  };

    baseClass: string = 'marca-editar-modal';



  constructor(private marcaService: MarcaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marca'] && this.marca) {
     
      this.editableMarca = { ...this.marca };
    }
  }
  guardar() {
    console.log('Guardando marca', this.marca);
    this.marcaService.actualizarMarca(this.marca).subscribe({
      next: () => {
        this.visibleChange.emit(false);
        this.onGuardar.emit();
      },
      error: (err) => {
        console.error('Error al actualizar marca', err);
      }
    });
  }

  cerrar() {
    this.visibleChange.emit(false);
  }
}

