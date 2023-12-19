import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { DataComponent } from './data/data.component';
import { DataGuardGuard } from './gurads/data-guard.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptor } from './interceptors/test.interceptor';

const routes: Routes = [{
  path:'set-status',
  component: StatusComponent
},
{
  path: 'data',
  component: DataComponent,
  canActivate: [DataGuardGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true },
  ],
})
export class MainRoutingModule { }
