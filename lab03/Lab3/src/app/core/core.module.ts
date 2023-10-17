import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserDetailsComponentComponent } from './user-details-component/user-details-component.component';
import { ExerciseComponent } from './exercise/exercise.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomepageComponent,
    UserDetailsComponentComponent,
    ExerciseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomepageComponent,
    UserDetailsComponentComponent,
    ExerciseComponent
  ]
})
export class CoreModule { }
