import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CategoriaService } from '../../services/categoria-service';
import { CategoriaCrearModal } from '../categoria-crear-modal/categoria-crear-modal';
import { CategoriaEditarModal } from '../categoria-editar-modal/categoria-editar-modal';


@Component({
  selector: 'app-categoria-table',
  imports: [FormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule, CategoriaCrearModal, CategoriaEditarModal],
  templateUrl: './categoria-table.html',
  styleUrl: './categoria-table.css'
})
export class CategoriaTable {
  baseClass: string = 'categoria-table';
  mostrarModal: boolean = false;
  categorias: any[] = [];
  mostrarEditarModal: boolean = false;

  categoriaSeleccionada: any = {
    nombre: '',
    descripcion: '',
    estado: ''
  };

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data.data;
    });
  }
    
  agregarCategoria() {
    this.mostrarModal = true;
    console.log('Agregar categoría');
  }

  guardarCategoria(data: any) {
    this.actualizarListadoCategorias();
  }

  editarCategoria(categoria: any) {
     this.categoriaSeleccionada = { ...categoria }; // Clonar para no mutar directamente
     this.mostrarEditarModal = true;
     console.log('Editar categoría', this.categoriaSeleccionada);
  }

  actualizarListadoCategorias() {
  this.categoriaService.getCategorias().subscribe(data => {
    this.categorias = data;
  });
}

  eliminarCategoria(categoria: any) {
  if (confirm(`¿Estás seguro de eliminar la categoría "${categoria.nombre}"?`)) {
    this.categoriaService.eliminarCategoria(categoria.idCategoria).subscribe({
      next: () => {
        this.categorias = this.categorias.filter(c => c.idCategoria !== categoria.idCategoria);
      },
      error: (err) => {
        console.error('Error al eliminar categoría:', err);
      }
    });
  }
}

}
