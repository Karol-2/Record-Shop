import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise/exercise.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    ExerciseComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExerciseComponent
  ]
})
export class CoreModule { }
