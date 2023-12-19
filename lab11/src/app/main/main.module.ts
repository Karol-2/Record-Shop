import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StatusComponent } from './status/status.component';
import { DataComponent } from './data/data.component';
import { AngularLoveDirective } from './directives/angular-love.directive';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StatusComponent,
    DataComponent,
    AngularLoveDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers:[
    HttpClientModule
  ],
  exports: [
    AngularLoveDirective
  ]
})
export class MainModule { }
