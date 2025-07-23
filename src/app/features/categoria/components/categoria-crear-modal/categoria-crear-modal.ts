import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CategoriaService } from '../../services/categoria-service';

@Component({
  selector: 'app-categoria-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './categoria-crear-modal.html',
  styleUrl: './categoria-crear-modal.css'
})
export class CategoriaCrearModal {
  // @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'categoria-crear-modal';

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formCategoria: FormGroup;

  constructor(private fb: FormBuilder,
    private categoriaService: CategoriaService
  ) {
    
    this.formCategoria = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  // guardar() {
  //   if (this.formCategoria.valid) {
  //     this.onSave.emit(this.formCategoria.value);
  //     this.formCategoria.reset();
  //     this.onClose.emit();
  //      this.visibleChange.emit(false);
  //   }
  // }

  guardar() {
    if (this.formCategoria.valid) {
      const nuevaCategoria: any = this.formCategoria.value;

      this.categoriaService.crearCategoria(nuevaCategoria).subscribe({
        next: (response) => {
          this.onSave.emit(response); // o response si backend responde con la nueva categoría
          this.visibleChange.emit(false);
          this.formCategoria.reset();
        },
        error: (err) => {
          console.error('Error al crear categoría:', err);
        }
      });
    }
  }
}
