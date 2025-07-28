import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MarcaService } from '../../services/marca-service';
import { ErrorModalComponent } from '../../../../shared/components/error-modal/error-modal';

@Component({
  selector: 'app-marca-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, ErrorModalComponent],
  templateUrl: './marca-editar-modal.html',
  styleUrls: ['./marca-editar-modal.css']
})
export class MarcaEditarModal {
  @Input() visible: boolean = false;
  @Input() marca: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableMarca: any = {
    nombre: '',
    descripcion: ''
  };

    baseClass: string = 'marca-editar-modal';

      errorVisible: boolean = false;
  errorMessage: string = '';
  errorDetails: Record<string, string[]> | null = null;



  constructor(private marcaService: MarcaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marca'] && this.marca) {
     
      this.editableMarca = { ...this.marca };
    }
  }
  guardar() {
    console.log('Guardando marca', this.marca);
    this.marcaService.actualizarMarca(this.marca).subscribe({
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

