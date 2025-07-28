// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-estante-crear-modal',
//   imports: [],
//   templateUrl: './estante-crear-modal.html',
//   styleUrl: './estante-crear-modal.css'
// })
// export class EstanteCrearModal {

// }

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { EstanteService } from '../../services/estante-service';
import { ErrorModalComponent } from '../../../../shared/components/error-modal/error-modal';


@Component({
  selector: 'app-estante-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule, ErrorModalComponent],
  standalone: true,
  templateUrl: './estante-crear-modal.html',
  styleUrl: './estante-crear-modal.css'
})
export class EstanteCrearModal {
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'estante-crear-modal';

    errorVisible: boolean = false;
  errorMessage: string = '';
  errorDetails: Record<string, string[]> | null = null;

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formestante: FormGroup;

  constructor(private fb: FormBuilder,
    private estanteService: EstanteService
  ) {

    this.formestante = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  guardar() {
    if (this.formestante.valid) {
      const nuevoestante: any = this.formestante.value;

      this.estanteService.crearEstante(nuevoestante).subscribe({
        next: (response) => {
          this.onSave.emit(response); // o response si backend responde con el nuevo estante
          this.visibleChange.emit(false);
          this.formestante.reset();
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

