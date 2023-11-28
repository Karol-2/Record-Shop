import { Component } from '@angular/core';
import { User } from '../user.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ){}
  
  private testObj: User = {id: 1, imie: "Karol", nazwisko: "Krawczykiewicz", kodPocztowy: "82-200", wiek: 21}
  protected userList: User[] = [this.testObj]
  
  protected details(user: User): void{
    this.router.navigate([user.id],{ relativeTo: this.activatedRoute, state: {user: user}})
  }
}
