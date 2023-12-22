import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  protected setStatus() {
    localStorage.setItem('status', 'true');
  }

  protected clearStorage() {
    localStorage.clear();
  }

  public getAll(): Observable<any> {
    return this.httpClient.get<any>(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  }

  ngOnInit(): void {
    this.getAll().subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
