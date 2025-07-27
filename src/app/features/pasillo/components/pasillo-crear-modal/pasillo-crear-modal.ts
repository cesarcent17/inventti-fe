import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasilloService } from '../../services/pasillo-service';


@Component({
  selector: 'app-pasillo-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './pasillo-crear-modal.html',
  styleUrl: './pasillo-crear-modal.css'
})
export class PasilloCrearModal {
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'pasillo-crear-modal';

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formPasillo: FormGroup;

  constructor(private fb: FormBuilder,
    private pasilloService: PasilloService
  ) {

    this.formPasillo = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  guardar() {
    if (this.formPasillo.valid) {
      const nuevoPasillo: any = this.formPasillo.value;

      this.pasilloService.crearPasillo(nuevoPasillo).subscribe({
        next: (response) => {
          this.onSave.emit(response); // o response si backend responde con el nuevo pasillo
          this.visibleChange.emit(false);
          this.formPasillo.reset();
        },
        error: (err) => {
          console.error('Error al crear pasillo:', err);
        }
      });
    }
  }
}
