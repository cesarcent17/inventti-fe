import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { UbicacionService } from '../../services/ubicacion-service';

@Component({
  selector: 'app-ubicacion-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './ubicacion-crear-modal.html',
  styleUrl: './ubicacion-crear-modal.css'
})
export class UbicacionCrearModal {
  // @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'ubicacion-crear-modal';

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formUbicacion: FormGroup;

  constructor(private fb: FormBuilder,
    private ubicacionService: UbicacionService
  ) {
    
    this.formUbicacion = this.fb.group({
      codigoPercha: ['', Validators.required],
      descripcion : ['', Validators.required]
    });
  }

  // guardar() {
  //   if (this.formUbicacion.valid) {
  //     this.onSave.emit(this.formUbicacion.value);
  //     this.formUbicacion.reset();
  //     this.onClose.emit();
  //      this.visibleChange.emit(false);
  //   }
  // }

  guardar() {
    if (this.formUbicacion.valid) {
      const nuevaUbicacion: any = this.formUbicacion.value;

      this.ubicacionService.crearUbicacion(nuevaUbicacion).subscribe({
        next: (response) => {
          this.onSave.emit(response); // o response si backend responde con la nueva categoría
          this.visibleChange.emit(false);
          this.formUbicacion.reset();
        },
        error: (err) => {
          console.error('Error al crear categoría:', err);
        }
      });
    }
  }
}
