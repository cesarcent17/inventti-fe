// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pasillo-editar-modal',
//   imports: [],
//   templateUrl: './pasillo-editar-modal.html',
//   styleUrl: './pasillo-editar-modal.css'
// })
// export class PasilloEditarModal {

// }


import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PasilloService } from '../../services/pasillo-service';
import { ErrorModalComponent } from '../../../../shared/components/error-modal/error-modal';

@Component({
  selector: 'app-pasillo-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, ErrorModalComponent],
  templateUrl: './pasillo-editar-modal.html',
  styleUrls: ['./pasillo-editar-modal.css']
})
export class PasilloEditarModal {
  @Input() visible: boolean = false;
  @Input() pasillo: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editablepasillo: any = {
    nombre: '',
    descripcion: '',
    estado: ''
  };

    baseClass: string = 'pasillo-editar-modal';

      errorVisible: boolean = false;
  errorMessage: string = '';
  errorDetails: Record<string, string[]> | null = null;



  constructor(private pasilloService: PasilloService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pasillo'] && this.pasillo) {
     
      this.editablepasillo = { ...this.pasillo };
    }
  }
  guardar() {
    console.log('Guardando pasillo', this.pasillo);
    this.pasilloService.actualizarPasillo(this.pasillo).subscribe({
      next: () => {
        this.visibleChange.emit(false);
        this.onGuardar.emit();
      },
      error: (error) => {
        this.errorMessage = error?.error?.message;
        this.errorDetails = error?.error?.errors;
        this.errorVisible = true;
      }
    });
  }

  cerrar() {
    this.visibleChange.emit(false);
  }
}
