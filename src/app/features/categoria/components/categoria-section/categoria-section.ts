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
import { CategoriaTable } from '../categoria-table/categoria-table';

@Component({
  selector: 'app-categoria-section',
   imports: [FormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule, CategoriaTable],
  templateUrl: './categoria-section.html',
  styleUrl: './categoria-section.css'
})
export class CategoriaSection {
  baseClass: string = 'categoria-section';

 categorias = [
        {
            id: 1,
            nombre: 'Herramientas eléctricas',
            descripcion: 'Herramientas que funcionan con energía eléctrica',
            estado: 'ACTIVO',
        }];
}
