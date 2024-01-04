import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/features/services/user.service';
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
  protected message: String = "";

  constructor(private loggedUserService:LoggedUserService, private userService: UserService){}
  
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
  }
  
  protected submit():void{
    const updatedUser: User = this.editForm.value;
    
    this.userService.updateUser(this.user.id,updatedUser).subscribe({
      next: (resp)=>{ this.updateHandler(resp)},
      error: (err)=> { this.message = this.getErrorMessageFromStatusCode(err.statusCode)}
      
    })
  }

  private updateHandler(user:User): void{
    this.message = "Update successful!"
    this.loggedUserService.setLoggedUser(user)
  }

  private getErrorMessageFromStatusCode(statusCode: number): string {
    switch (statusCode) {
      case 400:
        return "Error - At least one field is required for update";
      case 404:
        return "Error - User not found";
      case 409:
        return "Conflict - Email is already in use by another user or new email must be different";
      case 500:
        return "Internal Server Error";
      default:
        return "Unknown error";
    }
  }
}

