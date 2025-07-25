import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto-service';
import { ProductoCrearModal } from '../producto-crear-modal/producto-crear-modal';
import { TableModule } from 'primeng/table';
import { ProductoEditarModal } from '../producto-editar-modal/producto-editar-modal';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-producto-table',
  imports: [ProductoCrearModal, TableModule, ProductoEditarModal, TagModule],
  templateUrl: './producto-table.html',
  styleUrl: './producto-table.css'
})
export class ProductoTable {
  baseClass: string = 'producto-table';
  mostrarModal: boolean = false;
  productos: any[] = [];
  mostrarEditarModal: boolean = false;

  productoSeleccionada: any = {};

  constructor(private productoService: ProductoService) {}


  ngOnInit(): void {
    this.actualizarListadoproductoes();
  }

  agregarProducto() {
    this.mostrarModal = true;
    console.log('Agregar producto');
  }

  guardarProducto(data: any) {
    this.actualizarListadoproductoes();
  }

  editarProducto(producto: any) {
     this.productoSeleccionada = { ...producto }; // Clonar para no mutar directamente
     this.mostrarEditarModal = true;
     console.log('Editar producto', this.productoSeleccionada);
  }

  actualizarListadoproductoes() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      console.log('Productos actualizados:', this.productos);
    });
  }

  eliminarProducto(producto: any) {
    if (confirm(`¿Estás seguro de eliminar el producto "${producto.nombre}"?`)) {
      this.productoService.eliminarProducto(producto.idProducto).subscribe({
        next: () => {
          this.productos = this.productos.filter(c => c.idProducto !== producto.idProducto);
        },
        error: (err) => {
          console.error('Error al eliminar el producto:', err);
        }
      });
    }
  }

}
