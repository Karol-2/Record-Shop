import { Component, OnInit } from '@angular/core';
import { NumberEmitterService } from '../services/number-emitter.service';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-zad1',
  templateUrl: './zad1.component.html',
  styleUrls: ['./zad1.component.scss']
})
export class Zad1Component implements OnInit {
  constructor( private numberEmmiterService: NumberEmitterService){}

  protected evenNumbers: number[] = [];

  public ngOnInit(): void {
    this.numberEmmiterService.getObservable().pipe(
      tap((num)=> console.log(num)),
      filter((num) => num % 2 == 0),
      map((num)=> num * 2),
      map((num)=> this.evenNumbers.push(num))
    ).subscribe()
  }

  protected emitNumber(): void{
    setTimeout(() => {
      this.numberEmmiterService.emitNumber(6);
      setTimeout(() => {
        this.numberEmmiterService.emitNumber(13);
        setTimeout(() => {
          this.numberEmmiterService.emitNumber(10);
        }, 2000);
      }, 2000);
    }, 2000);
  }
  }


