// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-estante-editar-modal',
//   imports: [],
//   templateUrl: './estante-editar-modal.html',
//   styleUrl: './estante-editar-modal.css'
// })
// export class EstanteEditarModal {

// }




import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { EstanteService } from '../../services/estante-service';

@Component({
  selector: 'app-estante-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  templateUrl: './estante-editar-modal.html',
  styleUrls: ['./estante-editar-modal.css']
})
export class EstanteEditarModal {
  @Input() visible: boolean = false;
  @Input() estante: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableestante: any = {
    nombre: '',
    descripcion: '',
    estado: ''
  };

    baseClass: string = 'estante-editar-modal';



  constructor(private estanteService: EstanteService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['estante'] && this.estante) {
      // Hacemos una copia para edición local
      this.editableestante = { ...this.estante };
    }
  }
  guardar() {
    console.log('Guardando estante', this.estante);
    this.estanteService.actualizarEstante(this.estante).subscribe({
      next: () => {
        this.visibleChange.emit(false);
        this.onGuardar.emit();
      },
      error: (err) => {
        console.error('Error al actualizar el estante', err);
      }
    });
  }

  cerrar() {
    this.visibleChange.emit(false);
  }
}
