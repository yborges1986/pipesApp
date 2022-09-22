import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

import localeEsp from '@angular/common/locales/es-CU';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsp);
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    SalesModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CU',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
