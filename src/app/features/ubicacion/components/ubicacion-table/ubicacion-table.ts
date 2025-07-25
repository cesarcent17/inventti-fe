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
import { UbicacionCrearModal } from '../ubicacion-crear-modal/ubicacion-crear-modal';
import { UbicacionEditarModal } from '../ubicacion-editar-modal/ubicacion-editar-modal';
import { UbicacionService } from '../../services/ubicacion-service';


@Component({
  selector: 'app-ubicacion-table',
  imports: [FormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule, UbicacionCrearModal, UbicacionEditarModal],
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

  constructor(private ubicacionService: UbicacionService) {}


  ngOnInit(): void {
    this.actualizarListadoUbicaciones();
  }

  agregarUbicacion() {
    this.mostrarModal = true;
    console.log('Agregar ubicación');
  }

  guardarUbicacion(data: any) {
    this.actualizarListadoUbicaciones();
  }

  editarUbicacion(ubicacion: any) {
     this.ubicacionSeleccionada = { ...ubicacion }; // Clonar para no mutar directamente
     this.mostrarEditarModal = true;
     console.log('Editar ubicación', this.ubicacionSeleccionada);
  }

  actualizarListadoUbicaciones() {
    this.ubicacionService.getUbicaciones().subscribe(data => {
      this.ubicaciones = data;
    });
  }

  eliminarUbicacion(ubicacion: any) {
  if (confirm(`¿Estás seguro de eliminar la ubicación "${ubicacion.codigoPercha}"?`)) {
    this.ubicacionService.eliminarUbicacion(ubicacion.idUbicacion).subscribe({
      next: () => {
        this.ubicaciones = this.ubicaciones.filter(c => c.idUbicacion !== ubicacion.idUbicacion);
      },
      error: (err) => {
        console.error('Error al eliminar ubicación:', err);
      }
    });
  }
  }

}
