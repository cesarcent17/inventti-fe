import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { LoteService } from '../../services/lote-service';
import { ProductoService } from '../../../producto/services/producto-service';

@Component({
  selector: 'app-lote-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './lote-crear-modal.html',
  styleUrl: './lote-crear-modal.css'
})
export class LoteCrearModal {
  // @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'lote-crear-modal';

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formLote: FormGroup;

  productos: any[] = [];

  constructor(private fb: FormBuilder,
    private loteService: LoteService,
    private productoService: ProductoService
  ) {
    
    this.formLote = this.fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      idProducto: ['', Validators.required]
    });
  }

   ngOnInit() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data.data;
    });
  }

  guardar() {
    if (this.formLote.valid) {
      const nuevalote: any = this.formLote.value;

      this.loteService.crearLote(nuevalote).subscribe({
        next: (response) => {
          this.onSave.emit(response);
          this.visibleChange.emit(false);
          this.formLote.reset();
        },
        error: (err) => {
          console.error('Error al crear lote:', err);
        }
      });
    }
  }

  onDialogClose() {
    this.visibleChange.emit(false);
    this.formLote.reset();
  }
}
