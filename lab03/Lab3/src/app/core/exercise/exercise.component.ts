import { Component } from '@angular/core';
import { Record } from '../data/models/record.model';
import topThreeWords from '../data/excercise-2/zad2';
import { questionsChatGpt } from '../data/excercise-2/questions-chat-gpt';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent {
  private topThree: Record[] = topThreeWords(questionsChatGpt);
  readonly result: String = JSON.stringify(this.topThree);
}
