import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UbicacionService } from '../../services/ubicacion-service';
import { PasilloService } from '../../../pasillo/services/pasillo-service';
import { EstanteService } from '../../../estante/services/estante-service';
// import { PasilloService } from '../../services/pasillo-service';
// import { EstanteService } from '../../services/estante-service';

@Component({
  selector: 'app-ubicacion-editar-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule],
  templateUrl: './ubicacion-editar-modal.html',
  styleUrls: ['./ubicacion-editar-modal.css']
})
export class UbicacionEditarModal {
  @Input() visible: boolean = false;
  @Input() ubicacion: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onGuardar = new EventEmitter<void>();

  editableUbicacion: any = {
    idUbicacion: 0, 
    codigoPercha: '',
    descripcion: '',
    idPasillo: '',
    idEstante: ''
  };

  pasillos: any[] = [];
  estantes: any[] = [];

  baseClass: string = 'ubicacion-editar-modal';

  constructor(
    private ubicacionService: UbicacionService,
    private pasilloService: PasilloService,
    private estanteService: EstanteService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ubicacion'] && this.ubicacion) {
      this.editableUbicacion = { ...this.ubicacion };

      this.pasilloService.getPasillos().subscribe((data: any) => {
        this.pasillos = data.data;
        this.editableUbicacion.idPasillo = this.ubicacion.pasillo?.idPasillo;
      });

      this.estanteService.getEstantes().subscribe((data: any) => {
        this.estantes = data.data;
        this.editableUbicacion.idEstante = this.ubicacion.estante?.idEstante;
      });
    }
  }

guardar() {
  // Eliminamos las propiedades 'pasillo' y 'estante' ya que no son necesarias
  const { pasillo, estante, codigoPercha, ...ubicacionAEnviar } = this.editableUbicacion;

  console.log('Guardando ubicación:', ubicacionAEnviar);

  this.ubicacionService.actualizarUbicacion(ubicacionAEnviar).subscribe({
    next: () => {
      this.visibleChange.emit(false);
      this.onGuardar.emit();
    },
    error: (err) => {
      console.error('Error al actualizar ubicación', err);
    }
  });
}


  cerrar() {
    this.visibleChange.emit(false);
  }
}
