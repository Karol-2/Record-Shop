import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

import localePl from '@angular/common/locales/pl'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    SharedModule,
  
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
