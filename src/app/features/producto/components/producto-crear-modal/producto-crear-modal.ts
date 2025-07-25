import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../../producto/services/producto-service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-producto-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './producto-crear-modal.html',
  standalone: true,
  styleUrl: './producto-crear-modal.css'
})
export class ProductoCrearModal {
  // @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'producto-crear-modal';

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  formProducto: FormGroup;

  constructor(private fb: FormBuilder,
    private productoService: ProductoService
  ) {
    
    this.formProducto = this.fb.group({
      codigo: ['', Validators.required],
      nombre : ['', Validators.required],
      descripcion : ['', Validators.required],
      precio : ['', Validators.required],
      cantidadStock : ['', Validators.required],
      idMarca : ['', Validators.required],
      idCategoria : ['', Validators.required],
      idUbicacion : ['', Validators.required],
      estado : ['', Validators.required],
    });
  }



guardar() {
  if (this.formProducto.valid) {
    console.error('ES VALIDO');

    const formValue = this.formProducto.value;

    // Mapear y convertir valores
    const nuevoProducto = {
      codigo: formValue.codigo,
      nombre: formValue.nombre,
      descripcion: formValue.descripcion,
      precio: parseFloat(formValue.precio),  // Convertir a número
      cantidadStock: parseInt(formValue.cantidadStock, 10), // Convertir a número entero
      idMarca: parseInt(formValue.idMarca, 10),
      idCategoria: parseInt(formValue.idCategoria, 10),
      idUbicacion: parseInt(formValue.idUbicacion, 10),
      estado: formValue.estado,
      esEliminado: false, // Valor por defecto
      creadoPor: 1        // Valor por defecto
    };

    this.productoService.crearProducto(nuevoProducto).subscribe({
      next: (response) => {
        this.onSave.emit(response);
        this.visibleChange.emit(false);
        this.formProducto.reset();
      },
      error: (err) => {
        console.error('Error al crear producto:', err);
      }
    });
  }
}

}
