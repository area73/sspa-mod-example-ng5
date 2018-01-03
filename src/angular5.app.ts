import 'zone.js';
import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular2 from 'single-spa-angular2';
import { AppModule } from './app/app.module';

const ng2Lifecycles = singleSpaAngular2({
  domElementGetter,
    AppModule,
  //angularPlatform: platformBrowserDynamic(),
    angularPlatform: platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.log(err)),
  template: `<example-ng5-app/>`,
});

export const bootstrap = [
  ng2Lifecycles.bootstrap,
];

export const mount = [
  ng2Lifecycles.mount,
];

export const unmount = [
  ng2Lifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById('angular5');
}
