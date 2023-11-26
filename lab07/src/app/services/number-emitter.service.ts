import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberEmitterService {
  private numberSubject: Subject<number> = new Subject<number>();

  constructor() { }

  public getObservable(): Observable<number>{
    return this.numberSubject.asObservable();
  }

  public emitNumber(num: number): void {
    this.numberSubject.next(num);
  }
}
