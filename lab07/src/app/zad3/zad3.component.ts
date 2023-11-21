import { Component, OnInit } from '@angular/core';
import { DataEmitterService } from '../services/data-emitter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-zad3',
  templateUrl: './zad3.component.html',
  styleUrls: ['./zad3.component.scss']
})
export class Zad3Component implements OnInit {

  public constructor( private dataEmitterService: DataEmitterService){}

  protected dataA: any;
  protected dataB: any;
  protected dataC: any;

  private sub: Subscription = new Subscription();

  ngOnInit(): void {
    
  }



}
