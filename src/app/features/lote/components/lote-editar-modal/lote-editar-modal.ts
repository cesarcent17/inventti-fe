import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { LoteService } from '../../services/lote-service';
import { ProductoService } from '../../../producto/services/producto-service';
import { ErrorModalComponent } from '../../../../shared/components/error-modal/error-modal';

@Component({
  selector: 'app-lote-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, ErrorModalComponent],
  templateUrl: './lote-editar-modal.html',
  styleUrls: ['./lote-editar-modal.css']
})
export class LoteEditarModal {
  @Input() visible: boolean = false;
  @Input() lote: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableLote: any = {
    idLote: '',
    codigo: '',
    descripcion: '',
    idProducto: ''
  };

  errorVisible: boolean = false;
  errorMessage: string = '';
  errorDetails: Record<string, string[]> | null = null;

  productos: any[] = [];

  baseClass: string = 'lote-editar-modal';

  constructor(
    private loteService: LoteService,
    private productoService: ProductoService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lote'] && this.lote) {
      // Hacemos una copia del lote que viene desde el componente padre
      this.editableLote = { ...this.lote };

      // Cargamos la lista de productos
      this.productoService.getProductos().subscribe((data: any) => {
        this.productos = data.data;

        // Aseguramos que el producto seleccionado sea el correcto
        this.editableLote.idProducto = this.lote.producto?.idProducto;
      });
    }
  }

  guardar() {
    const { producto, ...loteAEnviar } = this.editableLote;

    console.log('Guardando lote:', loteAEnviar);

    this.loteService.actualizarLote(loteAEnviar).subscribe({
      next: () => {
        this.visibleChange.emit(false);
        this.onGuardar.emit();
      },
       error: (error) => {
        this.errorMessage = error?.error?.message;
        this.errorDetails = error?.error?.errors;
        this.errorVisible = true;
      }
    });
  }

  cerrar() {
    this.visibleChange.emit(false);
  }
}
