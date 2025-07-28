import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../../producto/services/producto-service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MarcaService } from '../../../marca/services/marca-service';
import { CategoriaService } from '../../../categoria/services/categoria-service';
import { UnidadMedidaService } from '../../../unidad-medida/services/unidad-medida-service';

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
 
  marcas: any[] = [];
  categorias: any[] = [];
  unidadesMedida: any[] = [];


  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  formProducto: FormGroup;

  constructor(private fb: FormBuilder,
    private productoService: ProductoService,
    private marcaService: MarcaService,
    private categoriaService: CategoriaService,
    private unidadMedidaService: UnidadMedidaService
  ) {
    
    this.formProducto = this.fb.group({
      codigo: ['', Validators.required],
      nombre : ['', Validators.required],
      descripcion : ['', Validators.required],
      precio : ['', Validators.required],
      idMarca : ['', Validators.required],
      idCategoria : ['', Validators.required],
      idUnidadMedida : ['', Validators.required],
      estado : ['ACTIVO'],
    });
  }

  ngOnInit() {
    this.marcaService.getMarcas().subscribe(data => {
      this.marcas = data.data;
      console.log('Marcas:', this.marcas);
    });

    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data.data;
      console.log('Categorias:', this.categorias);
    });

    this.unidadMedidaService.getUnidadesMedida().subscribe(data => {
      this.unidadesMedida = data.data;
      console.log('Unidades de Medida:', this.unidadesMedida);
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
      idMarca: parseInt(formValue.idMarca, 10),
      idCategoria: parseInt(formValue.idCategoria, 10),
      idUnidadMedida: parseInt(formValue.idUnidadMedida, 10),
      estado: 'ACTIVO',
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

onDialogClose() {
    this.visibleChange.emit(false);
    this.formProducto.reset();
  }

}
