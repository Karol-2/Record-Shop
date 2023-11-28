import { Component, OnInit } from '@angular/core';
import { DataEmitterService } from '../services/data-emitter.service';
import { Subscription, map, tap } from 'rxjs';

@Component({
  selector: 'app-zad3',
  templateUrl: './zad3.component.html',
  styleUrls: ['./zad3.component.scss'],
})
export class Zad3Component implements OnInit {
  public constructor(private dataEmitterService: DataEmitterService) {}

  protected dataA: any;
  protected dataB: any;
  protected dataC: any;

  public ngOnInit(): void {
    // A
    this.dataEmitterService.dataSubject
      .pipe(
        tap((data) => console.log('Subskrypcja A ' + data)),
        map((data) => (this.dataA = data))
      )
      .subscribe();

    // B
    this.dataEmitterService.dataSubject
      .pipe(
        map((data) => Number(data) * 2),
        map((data) => (this.dataB = data))
      )
      .subscribe();

    // C
    this.dataEmitterService.dataSubject
      .pipe(
        tap((data) => console.log('Observable zakończony')),
        map((data) => (this.dataC = data))
      )
      .subscribe();
  }

  protected emitData(): void {
    setTimeout(() => {
      this.dataEmitterService.emitData(10);
      setTimeout(() => {
        this.dataEmitterService.emitData(20);
        setTimeout(() => {
          this.dataEmitterService.emitData(30);
          setTimeout(() => {
            this.dataEmitterService.complete();
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }
}
