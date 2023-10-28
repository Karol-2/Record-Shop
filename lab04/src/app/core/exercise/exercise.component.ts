import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent {
  protected counter: number = 0;

  protected funkcja!: ReturnType<typeof setTimeout>;

  protected start(): void {
    this.funkcja = setInterval(() => {
      this.counter += 1;
      console.log(this.counter);
    }, 1000);
  }

  protected stop(): void {
    clearInterval(this.funkcja);
    console.log('STOP');
  }

  protected clear(): void {
    this.counter = 0;
    console.log(this.counter);
  }
}
