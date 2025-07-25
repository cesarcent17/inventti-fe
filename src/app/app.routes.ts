import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { MarcaSection } from './features/marca/components/marca-section/marca-section';
import { ProductoSection } from './features/producto/components/producto-section/producto-section';
import { CategoriaSection } from './features/categoria/components/categoria-section/categoria-section';
import { UbicacionSection } from './features/ubicacion/components/ubicacion-section/ubicacion-section';

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
