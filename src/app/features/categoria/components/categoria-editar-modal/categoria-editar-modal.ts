import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CategoriaService } from '../../services/categoria-service';

@Component({
  selector: 'app-categoria-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  templateUrl: './categoria-editar-modal.html',
  styleUrls: ['./categoria-editar-modal.css']
})
export class CategoriaEditarModal {
  @Input() visible: boolean = false;
  @Input() categoria: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableCategoria: any = {
    nombre: '',
    descripcion: '',
    estado: ''
  };

    baseClass: string = 'categoria-editar-modal';



  constructor(private categoriaService: CategoriaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoria'] && this.categoria) {
     
      this.editableCategoria = { ...this.categoria };
    }
  }
  guardar() {
    console.log('Guardando categoría', this.categoria);
    this.categoriaService.actualizarCategoria(this.categoria).subscribe({
      next: () => {
        this.visibleChange.emit(false);
        this.onGuardar.emit();
      },
      error: (err) => {
        console.error('Error al actualizar categoría', err);
      }
    });
  }

  cerrar() {
    this.visibleChange.emit(false);
  }
}
