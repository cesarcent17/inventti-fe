import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { MarcaSection } from './features/marca/components/marca-section/marca-section';
import { ProductoSection } from './features/producto/components/producto-section/producto-section';
import { CategoriaSection } from './features/categoria/components/categoria-section/categoria-section';
// import { MainLayoutComponent } from './layouts/main-layout/main-layout';
//MarcaSection

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
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
      }


    //   {
    //     path: 'marca',
    //     loadChildren: () =>
    //       import('./features/marca/marca.module').then(m => m.default),
    //   }
    ]
    // children: [
    //   {
    //     path: 'producto',
    //     loadChildren: () =>
    //       import('./features/producto/producto.module').then((m) => m.ProductoModule),
    //   },
    //   {
    //     path: 'marca',
    //     loadChildren: () =>
    //       import('./features/marca/marca.module').then((m) => m.MarcaModule),
    //   },
    //   {
    //     path: 'categoria',
    //     loadChildren: () =>
    //       import('./features/categoria/categoria.module').then((m) => m.CategoriaModule),
    //   },
    //   {
    //     path: 'ubicacion',
    //     loadChildren: () =>
    //       import('./features/ubicacion/ubicacion.module').then((m) => m.UbicacionModule),
    //   },
    //   { path: '', redirectTo: 'producto', pathMatch: 'full' },
    // ],
  },
];
