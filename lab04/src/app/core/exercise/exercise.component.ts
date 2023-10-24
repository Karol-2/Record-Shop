import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent {

    @Input() protected counter: number = 0;
    @Output() protected action: EventEmitter<number> = new EventEmitter<number>()

    protected funkcja!: ReturnType<typeof setTimeout>;

    protected start(): void {
      this.funkcja = setInterval(()=>{
        this.counter += 1;
        this.action.emit(this.counter);
      },1000)

      console.log(this.counter)
    }

    protected stop(): void {
      clearInterval(this.funkcja)
      console.log(this.counter)
    }

    protected clear(): void {
      this.counter = 0;
      this.action.emit(this.counter);
      
      console.log(this.counter)
    }

    


}   
