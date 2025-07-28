import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { UbicacionService } from '../../services/ubicacion-service';
import { PasilloService } from '../../../pasillo/services/pasillo-service';
import { EstanteService } from '../../../estante/services/estante-service';

@Component({
  selector: 'app-ubicacion-crear-modal',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './ubicacion-crear-modal.html',
  styleUrl: './ubicacion-crear-modal.css'
})
export class UbicacionCrearModal {
  // @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  baseClass: string = 'ubicacion-crear-modal';

  @Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();

  formUbicacion: FormGroup;

   pasillos: any[] = [];
  estantes: any[] = [];

  constructor(private fb: FormBuilder,
    private ubicacionService: UbicacionService,
    private pasilloService: PasilloService,
    private estanteService: EstanteService
  ) {
    
    this.formUbicacion = this.fb.group({
      descripcion : ['', Validators.required],
      idPasillo: ['', Validators.required],
      idEstante: ['', Validators.required]
    });
  }

   ngOnInit() {
    this.pasilloService.getPasillos().subscribe(data => {
      this.pasillos = data.data;
    });

    this.estanteService.getEstantes().subscribe(data => {
      this.estantes = data.data;
      console.log('Estantes cargados:', this.estantes);
    });
  }

  guardar() {
    if (this.formUbicacion.valid) {
      const nuevaUbicacion: any = this.formUbicacion.value;

      this.ubicacionService.crearUbicacion(nuevaUbicacion).subscribe({
        next: (response) => {
          this.onSave.emit(response); // o response si backend responde con la nueva categoría
          this.visibleChange.emit(false);
          this.formUbicacion.reset();
        },
        error: (err) => {
          console.error('Error al crear categoría:', err);
        }
      });
    }
  }

  onDialogClose() {
    this.visibleChange.emit(false);
    this.formUbicacion.reset();
  }
}
