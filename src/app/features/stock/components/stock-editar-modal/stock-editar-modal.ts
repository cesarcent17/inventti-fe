import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UbicacionService } from '../../../ubicacion/services/ubicacion-service';
import { StockService } from '../../services/stock-service';
import { LoteService } from '../../../lote/services/lote-service';


@Component({
  selector: 'app-stock-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  templateUrl: './stock-editar-modal.html',
  styleUrls: ['./stock-editar-modal.css']
})
export class StockEditarModal {
  @Input() visible: boolean = false;
  @Input() stock: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editablestock: any = {
    idStock: '',  // Asegúrate de que el idstock esté correctamente inicializado
    idLote: '',
    idUbicacion: '',
    cantidad: '',
    fechaIngreso: ''
  };

  lotes: any[] = [];
  ubicaciones: any[] = [];

  baseClass: string = 'stock-editar-modal';

  constructor(
    private stockService: StockService,
    private loteService: LoteService,
    private ubicacionService: UbicacionService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stock'] && this.stock) {
      // Asegurándonos de que los valores de idstock y otros campos estén correctamente copiados
      this.editablestock = { ...this.stock };

      // Cargar lotes y ubicaciones
      this.loteService.getLotes().subscribe((data: any) => {
        this.lotes = data.data;
        this.editablestock.idLote = this.stock.lote?.idLote;
      });

      this.ubicacionService.getUbicaciones().subscribe((data: any) => {
        this.ubicaciones = data.data;
        this.editablestock.idUbicacion = this.stock.ubicacion?.idUbicacion;
      });
    }
  }

guardar() {
  const { lote, ubicacion, producto, ...stockAEnviar } = this.editablestock;

  console.log('Guardando ubicación:', stockAEnviar);

  this.stockService.actualizarStock(stockAEnviar).subscribe({
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
