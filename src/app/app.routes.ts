import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { MarcaSection } from './features/marca/components/marca-section/marca-section';
import { ProductoSection } from './features/producto/components/producto-section/producto-section';
import { CategoriaSection } from './features/categoria/components/categoria-section/categoria-section';
import { UbicacionSection } from './features/ubicacion/components/ubicacion-section/ubicacion-section';
import { LoteSection } from './features/lote/components/lote-section/lote-section';
import { StockSection } from './features/stock/components/stock-section/stock-section';
import { UnidadMedidaSection } from './features/unidad-medida/components/unidad-medida-section/unidad-medida-section';
import { EstanteSection } from './features/estante/components/estante-section/estante-section';
import { PasilloSection } from './features/pasillo/components/pasillo-section/pasillo-section';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'producto',
        pathMatch: 'full'
      },
      {
        path: 'lote',
        component: LoteSection
      },
      {
        path: 'stock',
        component: StockSection
      },
      {
        path: 'unidad-medida',
        component: UnidadMedidaSection
      },
      {
        path: 'estante',
        component: EstanteSection
      },
      {
        path: 'pasillo',
        component: PasilloSection
      },
      {
        path: 'marca',
        component: MarcaSection
      },
      {
        path: 'producto',
        component: ProductoSection
      },
      {
        path: 'categoria',
        component: CategoriaSection
      },
       {
        path: 'ubicacion',
        component: UbicacionSection
      }
    ]
  }
];
