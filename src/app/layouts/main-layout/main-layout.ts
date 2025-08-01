import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Topbar } from '../../shared/components/topbar/topbar';
import { ErrorModalComponent } from '../../shared/components/error-modal/error-modal';


@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, PanelMenuModule, Topbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
  baseClass: string = 'main-layout';
  items: any[] = [
    {
      label: 'Lote',
      icon: 'pi pi-box',
      routerLink: '/lote',
    },
    {
      label: 'Stock',
      icon: 'pi pi-box',
      routerLink: '/stock',
    },
    {
      label: 'Producto',
      icon: 'pi pi-box',
      routerLink: '/producto',
    },
     {
      label: 'Unidad de Medida',
      icon: 'pi pi-box',
      routerLink: '/unidad-medida',
    },
    {
      label: 'Marca',
      icon: 'pi pi-tag',
      routerLink: '/marca',
    },
    {
      label: 'Categoría',
      icon: 'pi pi-folder',
      routerLink: '/categoria',
    },
    {
      label: 'Ubicación',
      icon: 'pi pi-map-marker',
      routerLink: '/ubicacion',
    },
    {
      label: 'Pasillo',
      icon: 'pi pi-map-marker',
      routerLink: '/pasillo',
    },
    {
      label: 'Estante',
      icon: 'pi pi-map-marker',
      routerLink: '/estante',
    },
  ];

}
