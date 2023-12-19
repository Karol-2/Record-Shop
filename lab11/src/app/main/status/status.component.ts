import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  // providers: [ HttpClientModule]

})
export class StatusComponent implements OnInit {

  constructor(private httpClient: HttpClient){}

  protected setStatus(){
    localStorage.setItem("status","true");
  }

  protected clearStorage(){
    localStorage.clear();
  }

  public getAll(): Observable<any>{
    return this.httpClient.get<any>(
      'https://gitlab.com/ug_at/aplikacje-webowe/23-24/wyklad/-/tree/main/wyklad-09?ref_type=heads'
      )
  }

  ngOnInit(): void {
    this.getAll()
  
  }

}
