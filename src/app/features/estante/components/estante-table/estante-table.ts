// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-estante-table',
//   imports: [],
//   templateUrl: './estante-table.html',
//   styleUrl: './estante-table.css'
// })
// export class EstanteTable {

// }




import { Component } from '@angular/core';
import { EstanteService } from '../../services/estante-service';
import { EstanteCrearModal } from '../estante-crear-modal/estante-crear-modal';
import { TableModule } from 'primeng/table';
import { EstanteEditarModal } from '../estante-editar-modal/estante-editar-modal';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-estante-table',
  imports: [EstanteCrearModal, TableModule, EstanteEditarModal, TagModule],
  templateUrl: './estante-table.html',
  styleUrl: './estante-table.css'
})
export class EstanteTable {
  baseClass: string = 'estante-table';
  mostrarModal: boolean = false;
  estante: any[] = [];
  mostrarEditarModal: boolean = false;

  estanteSeleccionada: any = {};

  constructor(private estanteService: EstanteService) {}


  ngOnInit(): void {
    this.actualizarListadoEstantes();
  }

  agregarEstante() {
    this.mostrarModal = true;
    console.log('Agregar estante');
  }

  guardarEstante(data: any) {
    this.actualizarListadoEstantes();
  }

  editarEstante(estante: any) {
     this.estanteSeleccionada = { ...estante }; // Clonar para no mutar directamente
     this.mostrarEditarModal = true;
     console.log('Editar estante', this.estanteSeleccionada);
  }

  actualizarListadoEstantes() {
    this.estanteService.getEstantes().subscribe(data => {
      this.estante = data.data;
      console.log('estantes actualizados:', this.estante);
    });
  }

  eliminarEstante(estante: any) {
    if (confirm(`¿Estás seguro de eliminar el estante "${estante.nombre}"?`)) {
      this.estanteService.eliminarEstante(estante.idEstante).subscribe({
        next: () => {
          this.estante = this.estante.filter(c => c.idEstante !== estante.idEstante);
        },
        error: (err) => {
          console.error('Error al eliminar el estante:', err);
        }
      });
    }
  }

}
