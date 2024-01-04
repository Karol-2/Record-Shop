import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CapitalLetterDirective } from 'src/app/shared/directives/capital-letter.directive';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  protected editForm!: FormGroup;
  protected error: String = "";

  constructor(private loggedUserService:LoggedUserService){}
  
  private user!:User;

  public ngOnInit(): void {

    this.loggedUserService.loggedUserChanged().subscribe((user) => {
      if(user){
        this.user = user;
      }
      
    });
    this.loggedUserService.loadUserFromLocalStorage();
  
    
   

    this.editForm = new FormGroup({
      firstName: new FormControl<string>(this.user.firstName,[Validators.minLength(3), Validators.required]),
      lastName: new FormControl<string>(this.user.lastName,[Validators.minLength(3), Validators.required]),
      email: new FormControl<string>(this.user.email,[Validators.email, Validators.required]),
      password: new FormControl<string>(this.user.password,[Validators.required, Validators.minLength(5)]),
    })
    //TODO: add user placeholder data
    //TODO: add sending to backend
  }
  
  protected submit():void{
    console.log(this.editForm);
  }
}
