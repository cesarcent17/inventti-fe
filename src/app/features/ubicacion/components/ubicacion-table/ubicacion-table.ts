// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ubicacion-table',
//   imports: [],
//   templateUrl: './ubicacion-table.html',
//   styleUrl: './ubicacion-table.css'
// })
// export class UbicacionTable {

// }



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


@Component({
  selector: 'app-ubicacion-table',
  imports: [FormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule],
  templateUrl: './ubicacion-table.html',
  styleUrl: './ubicacion-table.css'
})
export class UbicacionTable {
  baseClass: string = 'ubicacion-table';
  mostrarModal: boolean = false;
  ubicaciones: any[] = [];
  mostrarEditarModal: boolean = false;

  ubicacionSeleccionada: any = {
    idUbicacion: '',
    codigoPercha: '',
    descripcion: ''
  };

  // constructor(private categoriaService: CategoriaService) {}
  constructor() {}


  ngOnInit(): void {
    // this.categoriaService.getCategorias().subscribe(data => {
    //   this.categorias = data;
    // });
  }

  agregarUbicacion() {
    // this.mostrarModal = true;
    console.log('Agregar ubicación');
  }

  guardarUbicacion(data: any) {
    // this.actualizarListadoUbicaciones();
  }

  editarUbicacion(ubicacion: any) {
    //  this.ubicacionSeleccionada = { ...ubicacion }; // Clonar para no mutar directamente
    //  this.mostrarEditarModal = true;
     console.log('Editar ubicación', this.ubicacionSeleccionada);
  }

  actualizarListadoUbicaciones() {
  // this.categoriaService.getCategorias().subscribe(data => {
  //   this.categorias = data;
  // });
}

  eliminarUbicacion(ubicacion: any) {
  // if (confirm(`¿Estás seguro de eliminar la ubicación "${ubicacion.nombre}"?`)) {
  //   this.categoriaService.eliminarCategoria(ubicacion.idUbicacion).subscribe({
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
