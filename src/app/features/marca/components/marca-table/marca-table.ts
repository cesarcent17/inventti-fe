import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-marca-table',
  imports: [FormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, CommonModule],
  templateUrl: './marca-table.html',
  styleUrl: './marca-table.css'
})
export class MarcaTable {
  baseClass: string = 'marca-table';
  mostrarModal: boolean = false;
  marcas: any[] = [];
  mostrarEditarModal: boolean = false;

  marcaSeleccionada: any = {
    idMarca: '',
    nombre: '',
    descripcion: '',
    estado: ''
  };

  // constructor(private categoriaService: CategoriaService) {}
  constructor() {}


  ngOnInit(): void {
    // this.categoriaService.getCategorias().subscribe(data => {
    //   this.categorias = data;
    // });
  }

  agregarMarca() {
    // this.mostrarModal = true;
    console.log('Agregar marca');
  }

  guardarMarca(data: any) {
    // this.actualizarListadoMarcas();
  }

  editarMarca(marca: any) {
    //  this.marcaSeleccionada = { ...marca }; // Clonar para no mutar directamente
    //  this.mostrarEditarModal = true;
     console.log('Editar marca', this.marcaSeleccionada);
  }

  actualizarListadoMarcas() {
  // this.categoriaService.getCategorias().subscribe(data => {
  //   this.categorias = data;
  // });
}

  eliminarMarca(marca: any) {
  // if (confirm(`¿Estás seguro de eliminar la marca "${marca.nombre}"?`)) {
  //   this.categoriaService.eliminarCategoria(marca.idMarca).subscribe({
  //     next: () => {
  //       this.categorias = this.categorias.filter(c => c.idUbicacion !== ubicacion.idUbicacion);
  //     },
  //     error: (err) => {
  //       console.error('Error al eliminar ubicación:', err);
  //     }
  //   });
  // }
}

}
