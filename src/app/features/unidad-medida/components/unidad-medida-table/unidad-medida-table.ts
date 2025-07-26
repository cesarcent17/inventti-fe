import { Component } from '@angular/core';
import { UnidadMedidaService } from '../../services/unidad-medida-service';
import { UnidadMedidaCrearModal } from '../unidad-medida-crear-modal/unidad-medida-crear-modal';
import { TableModule } from 'primeng/table';
import { UnidadMedidaEditarModal } from '../unidad-medida-editar-modal/unidad-medida-editar-modal';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-unidad-medida-table',
  imports: [UnidadMedidaCrearModal, TableModule, UnidadMedidaEditarModal, TagModule],
  templateUrl: './unidad-medida-table.html',
  styleUrl: './unidad-medida-table.css'
})
export class UnidadMedidaTable {
  baseClass: string = 'unidad-medida-table';
  mostrarModal: boolean = false;
  unidadesMedida: any[] = [];
  mostrarEditarModal: boolean = false;

  unidadMedidaSeleccionada: any = {};

  constructor(private unidadMedidaService: UnidadMedidaService) {}


  ngOnInit(): void {
    this.actualizarListadounidadMedidas();
  }

  agregarUnidadMedida() {
    this.mostrarModal = true;
    console.log('Agregar unidad de medida');
  }

  guardarUnidadMedida(data: any) {
    this.actualizarListadounidadMedidas();
  }

  editarUnidadMedida(unidadMedida: any) {
     this.unidadMedidaSeleccionada = { ...unidadMedida }; // Clonar para no mutar directamente
     this.mostrarEditarModal = true;
     console.log('Editar unidad de medida', this.unidadMedidaSeleccionada);
  }

  actualizarListadounidadMedidas() {
    this.unidadMedidaService.getUnidadesMedida().subscribe(data => {
      this.unidadesMedida = data.data;
      console.log('unidadesMedida actualizados:', this.unidadesMedida);
    });
  }

  eliminarUnidadMedida(unidadMedida: any) {
    if (confirm(`¿Estás seguro de eliminar el unidad de medida "${unidadMedida.nombre}"?`)) {
      this.unidadMedidaService.eliminarUnidadMedida(unidadMedida.idUnidadMedida).subscribe({
        next: () => {
          this.unidadesMedida = this.unidadesMedida.filter(c => c.idUnidadMedida !== unidadMedida.idUnidadMedida);
        },
        error: (err) => {
          console.error('Error al eliminar el unidad de medida:', err);
        }
      });
    }
  }

}

