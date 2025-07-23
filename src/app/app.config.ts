import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';


import { routes } from './app.routes';
import Aura from '@primeuix/themes/aura';
import Material from '@primeuix/themes/material';
import Nora from '@primeuix/themes/nora';
import Lara from '@primeuix/themes/lara';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
         options: {
            darkModeSelector: false || 'none'
        }
      },
    })
  ]
};
