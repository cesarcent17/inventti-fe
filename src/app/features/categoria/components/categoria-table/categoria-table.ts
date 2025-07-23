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
import { Button } from 'primeng/button';

@Component({
  selector: 'app-categoria-table',
  imports: [FormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule, Button],
  templateUrl: './categoria-table.html',
  styleUrl: './categoria-table.css'
})
export class CategoriaTable {
    baseClass: string = 'categoria-table';

   categorias = [
        {
            id: 1,
            nombre: 'Herramientas eléctricas',
            descripcion: 'Herramientas que funcionan con energía eléctrica',
            estado: 'ACTIVO',
        }];

        
  agregarCategoria() {
    console.log('Agregar categoría');
  }

}
