import { Component } from '@angular/core';
import { PasilloService } from '../../services/pasillo-service';
import { PasilloCrearModal } from '../pasillo-crear-modal/pasillo-crear-modal';
import { TableModule } from 'primeng/table';
import { PasilloEditarModal } from '../pasillo-editar-modal/pasillo-editar-modal';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-pasillo-table',
  imports: [PasilloCrearModal, TableModule, PasilloEditarModal, TagModule, PasilloCrearModal, PasilloEditarModal],
  templateUrl: './pasillo-table.html',
  standalone: true,
  styleUrl: './pasillo-table.css'
})
export class PasilloTable {
  baseClass: string = 'pasillo-table';
  mostrarModal: boolean = false;
  pasillo: any[] = [];
  mostrarEditarModal: boolean = false;

  pasilloSeleccionada: any = {};

  constructor(private pasilloService: PasilloService) {}


  ngOnInit(): void {
    this.actualizarListadopasillos();
  }

  agregarPasillo() {
    this.mostrarModal = true;
    console.log('Agregar pasillo');
  }

  guardarPasillo(data: any) {
    this.actualizarListadopasillos();
  }

  editarPasillo(pasillo: any) {
     this.pasilloSeleccionada = { ...pasillo }; // Clonar para no mutar directamente
     this.mostrarEditarModal = true;
     console.log('Editar pasillo', this.pasilloSeleccionada);
  }

  actualizarListadopasillos() {
    this.pasilloService.getPasillos().subscribe(data => {
      this.pasillo = data.data;
      console.log('pasillos actualizados:', this.pasillo);
    });
  }

  eliminarPasillo(pasillo: any) {
    console.log('Eliminar pasillo', pasillo);
    if (confirm(`¿Estás seguro de eliminar el pasillo "${pasillo.nombre}"?`)) {
      this.pasilloService.eliminarPasillo(pasillo.idPasillo).subscribe({
        next: () => {
          this.pasillo = this.pasillo.filter(c => c.idPasillo !== pasillo.idPasillo);
        },
        error: (err) => {
          console.error('Error al eliminar el pasillo:', err);
        }
      });
    }
  }

}
