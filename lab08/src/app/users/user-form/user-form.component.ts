import { Component} from '@angular/core';
import {  NgForm } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  
})
export class UserFormComponent {
  imie: string = '';
  nazwisko: string = '';
  wiek: number = 1;
  kodPocztowy: string = '';
  
  public constructor( private userService:UserService){}
  
  protected save(form: NgForm): void {
    const formResult = form.value;
    const newUser: User = {...formResult, id: uuidv4()}

    this.userService.addUser(newUser)
  }
}
