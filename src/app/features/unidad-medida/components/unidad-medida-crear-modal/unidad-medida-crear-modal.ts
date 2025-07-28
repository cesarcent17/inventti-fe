// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-unidad-medida-crear-modal',
//   imports: [],
//   templateUrl: './unidad-medida-crear-modal.html',
//   styleUrl: './unidad-medida-crear-modal.css'
// })
// export class UnidadMedidaCrearModal {

// }


import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
// import { MarcaService } from '../../services/marca-service';
import { UnidadMedidaService } from '../../services/unidad-medida-service';
import { ErrorModalComponent } from '../../../../shared/components/error-modal/error-modal';

@Component({
  selector: 'app-unidad-medida-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule, ErrorModalComponent],
  standalone: true,
  templateUrl: './unidad-medida-crear-modal.html',
  styleUrl: './unidad-medida-crear-modal.css'
})
export class UnidadMedidaCrearModal {
  // @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'unidad-medida-crear-modal';

   errorVisible: boolean = false;
  errorMessage: string = '';
  errorDetails: Record<string, string[]> | null = null;

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formUnidadMedida: FormGroup;

  constructor(private fb: FormBuilder,
    private unidadMedidaService: UnidadMedidaService
  ) {

    this.formUnidadMedida = this.fb.group({
      nombre: ['', Validators.required],
      simbolo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  guardar() {
    console.log('Guardar unidad de medida', this.formUnidadMedida.value);
    if (this.formUnidadMedida.valid) {
      const nuevaUnidadMedida: any = this.formUnidadMedida.value;

      this.unidadMedidaService.crearUnidadMedida(nuevaUnidadMedida).subscribe({
        next: (response) => {
          this.onSave.emit(response);
          this.visibleChange.emit(false);
          this.formUnidadMedida.reset();
        },
        error: (error) => {
        this.errorMessage = error?.error?.message;
        this.errorDetails = error?.error?.errors;
        this.errorVisible = true;
      }
      });
    }
  }
}
