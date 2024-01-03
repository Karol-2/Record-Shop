import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoggedUserService } from '../shared/services/logged-user.service';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        MainComponent,
        NavComponent
    ],
    providers: [
        LoggedUserService
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        MainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class CoreModule { }
