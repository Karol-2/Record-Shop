import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise/exercise.component';
import { CounterComponent } from './exercise/counter/counter.component';



@NgModule({
  declarations: [
    ExerciseComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent,
    ExerciseComponent
  ]
})
export class CoreModule { }
