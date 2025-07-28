import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { StockService } from '../../services/stock-service';
import { LoteService } from '../../../lote/services/lote-service';
import { UbicacionService } from '../../../ubicacion/services/ubicacion-service';

@Component({
  selector: 'app-stock-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './stock-crear-modal.html',
  styleUrl: './stock-crear-modal.css'
})
export class StockCrearModal {
  // @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'stock-crear-modal';

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formstock: FormGroup;

  lotes: any[] = [];
  ubicaciones: any[] = [];


  constructor(private fb: FormBuilder,
    private stockService: StockService,
    private loteService: LoteService,
    private ubicacionService: UbicacionService
  ) {
    
    this.formstock = this.fb.group({
      idLote: ['', Validators.required],
      idUbicacion: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaIngreso: ['', Validators.required]
    });
  }

   ngOnInit() {
    this.loteService.getLotes().subscribe(data => {
      this.lotes = data.data;
    });

    this.ubicacionService.getUbicaciones().subscribe(data => {
      this.ubicaciones = data.data;
      console.log('Ubicaciones:', this.ubicaciones);
    });
  }

  guardar() {
    if (this.formstock.valid) {
      const nuevastock: any = this.formstock.value;

      this.stockService.crearStock(nuevastock).subscribe({
        next: (response) => {
          this.onSave.emit(response);
          this.visibleChange.emit(false);
          this.formstock.reset();
        },
        error: (err) => {
          console.error('Error al crear stock:', err);
        }
      });
    }
  }

  onDialogClose() {
    this.visibleChange.emit(false);
    this.formstock.reset();
  }
}
