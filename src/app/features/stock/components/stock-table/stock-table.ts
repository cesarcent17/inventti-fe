// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-stock-table',
//   imports: [],
//   templateUrl: './stock-table.html',
//   styleUrl: './stock-table.css'
// })
// export class StockTable {

// }

import { Component } from '@angular/core';
import { StockService } from '../../services/stock-service';
import { StockCrearModal } from '../stock-crear-modal/stock-crear-modal';
import { TableModule } from 'primeng/table';
import { StockEditarModal } from '../stock-editar-modal/stock-editar-modal';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-stock-table',
  imports: [StockCrearModal, TableModule, StockEditarModal, TagModule],
  templateUrl: './stock-table.html',
  styleUrl: './stock-table.css'
})
export class StockTable {
  baseClass: string = 'stock-table';
  mostrarModal: boolean = false;
  stock: any[] = [];
  mostrarEditarModal: boolean = false;

  stockSeleccionada: any = {};

  constructor(private stockService: StockService) {}


  ngOnInit(): void {
    this.actualizarListadostockes();
  }

  agregarStock() {
    this.mostrarModal = true;
    console.log('Agregar stock');
  }

  guardarStock(data: any) {
    this.actualizarListadostockes();
  }

  editarStock(stock: any) {
     this.stockSeleccionada = { ...stock }; // Clonar para no mutar directamente
     this.mostrarEditarModal = true;
     console.log('Editar stock', this.stockSeleccionada);
  }

  actualizarListadostockes() {
    this.stockService.getStocks().subscribe(data => {
      this.stock = data.data;
      console.log('stocks actualizados:', this.stock);
    });
  }

  eliminarStock(stock: any) {
    if (confirm(`¿Estás seguro de eliminar el stock "${stock.idStock}"?`)) {
      this.stockService.eliminarStock(stock.idStock).subscribe({
        next: () => {
          this.stock = this.stock.filter(c => c.idStock !== stock.idStock);
        },
        error: (err) => {
          console.error('Error al eliminar el stock:', err);
        }
      });
    }
  }

}
