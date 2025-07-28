// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-unidad-medida-editar-modal',
//   imports: [],
//   templateUrl: './unidad-medida-editar-modal.html',
//   styleUrl: './unidad-medida-editar-modal.css'
// })
// export class UnidadMedidaEditarModal {

// }


import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UnidadMedidaService } from '../../services/unidad-medida-service';
import { ErrorModalComponent } from '../../../../shared/components/error-modal/error-modal';
// import { Unidad } from '../../services/marca-service';

@Component({
  selector: 'app-unidad-medida-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, ErrorModalComponent],
  templateUrl: './unidad-medida-editar-modal.html',
  styleUrls: ['./unidad-medida-editar-modal.css']
})
export class UnidadMedidaEditarModal {
  @Input() visible: boolean = false;
  @Input() unidadMedida: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableUnidadMedida: any = {
    nombre: '',
    simbolo: '',
    descripcion: ''
  };

  errorVisible: boolean = false;
  errorMessage: string = '';
  errorDetails: Record<string, string[]> | null = null;

  baseClass: string = 'unidad-medida-editar-modal';

  constructor(private unidadMedidaService: UnidadMedidaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['unidadMedida'] && this.unidadMedida) {
      this.editableUnidadMedida = { ...this.unidadMedida };
    }
  }
  guardar() {
    console.log('Guardando unidad de medida', this.editableUnidadMedida);
    this.unidadMedidaService.actualizarUnidadMedida(this.editableUnidadMedida).subscribe({
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


