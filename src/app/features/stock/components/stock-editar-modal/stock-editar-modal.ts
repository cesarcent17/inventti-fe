import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UbicacionService } from '../../../ubicacion/services/ubicacion-service';
import { StockService } from '../../services/stock-service';
import { LoteService } from '../../../lote/services/lote-service';
import { ErrorModalComponent } from '../../../../shared/components/error-modal/error-modal';


@Component({
  selector: 'app-stock-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, ErrorModalComponent],
  templateUrl: './stock-editar-modal.html',
  styleUrls: ['./stock-editar-modal.css']
})
export class StockEditarModal {
  @Input() visible: boolean = false;
  @Input() stock: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editablestock: any = {
    idStock: '', 
    idLote: '',
    idUbicacion: '',
    cantidad: '',
    fechaIngreso: ''
  };

  errorVisible: boolean = false;
  errorMessage: string = '';
  errorDetails: Record<string, string[]> | null = null;

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
      this.editablestock = { ...this.stock };

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
