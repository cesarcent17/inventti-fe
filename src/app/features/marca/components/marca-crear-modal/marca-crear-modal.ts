import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MarcaService } from '../../services/marca-service';

@Component({
  selector: 'app-marca-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './marca-crear-modal.html',
  styleUrl: './marca-crear-modal.css'
})
export class MarcaCrearModal {
  // @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'marca-crear-modal';

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formMarca: FormGroup;

  constructor(private fb: FormBuilder,
    private marcaService: MarcaService
  ) {

    this.formMarca   = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  guardar() {
    console.log('Guardando marca', this.formMarca.value);
    if (this.formMarca.valid) {
      const nuevaMarca: any = this.formMarca.value;
      

      this.marcaService.crearMarca(nuevaMarca).subscribe({
        next: (response) => {
          this.onSave.emit(response);
          this.visibleChange.emit(false);
          this.formMarca.reset();
        },
        error: (err) => {
          console.error('Error al crear marca:', err);
        }
      });
    }
  }
}
