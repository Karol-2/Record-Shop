import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEmitterService {
  
  public dataSubject: Subject<number | string> = new Subject<number | string>();

  public emitData(data: any): void{
    this.dataSubject.next(data);
  }

  public complete(): void{
    this.dataSubject.complete();
  }

}
