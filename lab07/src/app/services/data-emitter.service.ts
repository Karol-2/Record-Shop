import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEmitterService {
  
  protected dataSubject: Subject<number | string> = new Subject();

  protected emitData(data: any): void{
    this.dataSubject.next(data);
  }

  protected complete(): void{
    this.dataSubject.complete();
  }

  constructor() { }
}
