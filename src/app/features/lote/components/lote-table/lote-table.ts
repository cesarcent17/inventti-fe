import { Component } from '@angular/core';
import { LoteService } from '../../services/lote-service';
import { LoteCrearModal } from '../lote-crear-modal/lote-crear-modal';
import { TableModule } from 'primeng/table';
import { LoteEditarModal } from '../lote-editar-modal/lote-editar-modal';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-lote-table',
  imports: [LoteCrearModal, TableModule, LoteEditarModal, TagModule],
  templateUrl: './lote-table.html',
  styleUrl: './lote-table.css'
})
export class LoteTable {
  baseClass: string = 'lote-table';
  mostrarModal: boolean = false;
  lotes: any[] = [];
  mostrarEditarModal: boolean = false;

  loteSeleccionada: any = {};

  constructor(private loteService: LoteService) {}


  ngOnInit(): void {
    this.actualizarListadolotees();
  }

  agregarLote() {
    this.mostrarModal = true;
    console.log('Agregar lote');
  }

  guardarLote(data: any) {
    this.actualizarListadolotees();
  }

  editarLote(lote: any) {
     this.loteSeleccionada = { ...lote }; // Clonar para no mutar directamente
     this.mostrarEditarModal = true;
     console.log('Editar lote', this.loteSeleccionada);
  }

  actualizarListadolotees() {
    this.loteService.getLotes().subscribe(data => {
      this.lotes = data.data;
      console.log('lotes actualizados:', this.lotes);
    });
  }

  eliminarLote(lote: any) {
    if (confirm(`¿Estás seguro de eliminar el lote "${lote.codigo}"?`)) {
      this.loteService.eliminarLote(lote.idLote).subscribe({
        next: () => {
          this.lotes = this.lotes.filter(c => c.idLote !== lote.idLote);
        },
        error: (err) => {
          console.error('Error al eliminar el lote:', err);
        }
      });
    }
  }

}
