import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ProductoService } from '../../services/producto-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-producto-editar-modal',
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  standalone: true,
  templateUrl: './producto-editar-modal.html',
  styleUrl: './producto-editar-modal.css'
})
export class ProductoEditarModal {
  @Input() visible: boolean = false;
  @Input() producto: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableProducto: any = {
  };

  baseClass: string = 'producto-editar-modal';

  descripcion: string = '';



  constructor(private productoService: ProductoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) {
      // Hacemos una copia para edición local
      this.editableProducto = { ...this.producto };
    }
  }
  guardar() {

    const payload = {
      idProducto: this.producto.idProducto,
      codigo: this.producto.codigo,
      nombre: this.producto.nombre,
      descripcion: '',
      precio: this.producto.precio,
      cantidadStock: this.producto.cantidadStock,
      idMarca: this.producto.idMarca,
      idCategoria: this.producto.idCategoria,
      idUbicacion: this.producto.idUbicacion,
      estado: this.producto.estado
    };

    this.productoService.actualizarProducto(payload).subscribe({
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
