import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ProductoService } from '../../services/producto-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MarcaService } from '../../../marca/services/marca-service';
import { CategoriaService } from '../../../categoria/services/categoria-service';
import { UnidadMedidaService } from '../../../unidad-medida/services/unidad-medida-service';

@Component({
  selector: 'app-producto-editar-modal',
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  standalone: true,
  templateUrl: './producto-editar-modal.html',
  styleUrl: './producto-editar-modal.css'
})
export class ProductoEditarModal {
  @Input() visible: boolean = false;
  @Input() producto: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();
   marcas: any[] = [];
  categorias: any[] = [];
  unidadesMedida: any[] = [];

  // editableProducto: any = {
  // };
  
  editableProducto: any = {
    idProducto: 0,  // Asegúrate de que el idUbicacion esté correctamente inicializado
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    idMarca: '',
    idCategoria: '',
    idUbicacion: '',
    estado: '',
    idUnidadMedida: ''
  };

  baseClass: string = 'producto-editar-modal';

  descripcion: string = '';



  constructor(private productoService: ProductoService, private marcaService: MarcaService, private categoriaService: CategoriaService, private unidadMedidaService: UnidadMedidaService) { }

    ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) {
      this.editableProducto = { ...this.producto };

      this.marcaService.getMarcas().subscribe((data: any) => {
        this.marcas = data.data;
        this.editableProducto.idMarca = this.producto.marca?.idMarca;
      });
    }
  }


  guardar() {

    // const payload = {
    //   idProducto: this.producto.idProducto,
    //   codigo: this.producto.codigo,
    //   nombre: this.producto.nombre,
    //   descripcion: '',
    //   precio: this.producto.precio,
    //   cantidadStock: this.producto.cantidadStock,
    //   idMarca: this.producto.idMarca,
    //   idCategoria: this.producto.idCategoria,
    //   idUbicacion: this.producto.idUbicacion,
    //   estado: this.producto.estado
    // };

    // this.productoService.actualizarProducto(payload).subscribe({
    //   next: () => {
    //     this.visibleChange.emit(false);
    //     this.onGuardar.emit();
    //   },
    //   error: (err) => {
    //     console.error('Error al actualizar ubicación', err);
    //   }
    // });
  }

  cerrar() {
    this.visibleChange.emit(false);
  }
}
