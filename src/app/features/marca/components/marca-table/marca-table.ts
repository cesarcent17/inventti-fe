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
import { MarcaService } from '../../services/marca-service';
import { MarcaCrearModal } from '../marca-crear-modal/marca-crear-modal';
import { MarcaEditarModal } from '../marca-editar-modal/marca-editar-modal';


@Component({
  selector: 'app-marca-table',
  imports: [FormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, CommonModule, MarcaCrearModal, MarcaEditarModal],
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

  constructor(private marcaService: MarcaService) {}


  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(data => {
      this.marcas = data?.data;
    });
  }

  agregarMarca() {
    this.mostrarModal = true;
    console.log('Agregar marca');
  }

  guardarMarca(data: any) {
    this.actualizarListadoMarcas();
  }

  editarMarca(marca: any) {
     this.marcaSeleccionada = { ...marca };
     this.mostrarEditarModal = true;
     console.log('Editar marca', this.marcaSeleccionada);
  }

  actualizarListadoMarcas() {
    this.marcaService.getMarcas().subscribe(data => {
      this.marcas = data;
    });
  }

  eliminarMarca(marca: any) {
  if (confirm(`¿Estás seguro de eliminar la marca "${marca.nombre}"?`)) {
    this.marcaService.eliminarMarca(marca.idMarca).subscribe({
      next: () => {
        this.marcas = this.marcas.filter(c => c.idMarca !== marca.idMarca);
      },
      error: (err) => {
        console.error('Error al eliminar marca:', err);
      }
    });
  }
}

}
