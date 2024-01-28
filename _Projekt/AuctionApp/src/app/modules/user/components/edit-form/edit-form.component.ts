import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/features/services/user.service';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  protected editForm!: FormGroup;
  protected message: string = "";

  public constructor(private loggedUserService: LoggedUserService, private userService: UserService, private snackBar: MatSnackBar){}
  
  private user!: User;

  public ngOnInit(): void {
    this.loggedUserService.loggedUserChanged().subscribe((user: User | null) => {
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
    });
  }
  
  protected submit(): void{
    const updatedUser: User = this.editForm.value;
    
    this.userService.updateUser(this.user.id,updatedUser).subscribe({
      next: (resp: User)=>{ this.updateHandler(resp);},
      error: (error: HttpErrorResponse)=> {
        this.message = this.getErrorMessageFromStatusCode(error.status);
        this.openSnackBar(this.message);
      }
      
    });
  }

  private updateHandler(user: User): void{
    this.message = "Update successful!";
    this.openSnackBar(this.message);
    this.loggedUserService.setLoggedUser(user);
  }

  private getErrorMessageFromStatusCode(statusCode: number): string {   
    switch (statusCode) {
    case 400:
      return "Error - At least one field is required for update";
    case 404:
      return "Error - User not found";
    case 409:
      return "Conflict - Email is already in use";
    case 500:
      return "Internal Server Error";
    default:
      return "Unknown error";
    }
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'OK');
  }
}

