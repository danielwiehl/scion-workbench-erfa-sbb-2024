import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app.routes';
import {MAIN_AREA, provideWorkbench} from '@scion/workbench';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideWorkbench({
      layout: factory => factory
        .addPart(MAIN_AREA)
        .addPart('left', {relativeTo: MAIN_AREA, align: 'left', ratio: .25})
        .addPart('bottom', {relativeTo: MAIN_AREA, align: 'bottom', ratio: .3})
        .addView('orders', {partId: 'left'})
        .navigateView('orders', ['orders']),
    }),
  ],
};
