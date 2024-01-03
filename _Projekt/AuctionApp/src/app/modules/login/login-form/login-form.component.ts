import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import LoginUser from 'src/app/features/dto/login-user.model';
import Tokens from 'src/app/features/dto/tokens.model';
import { AuthService } from 'src/app/features/services/auth.service';
import { UserService } from 'src/app/features/services/user.service';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService]
})
export class LoginFormComponent implements OnInit{
  protected loginForm!: FormGroup;
  protected error: String = "";

  constructor(
    private authService: AuthService, 
    private userService: UserService,
    private loggedUserService: LoggedUserService,
    private router: Router){}

  ngOnInit(): void {
   this.loginForm = new FormGroup({
    email: new FormControl<string>("",[Validators.required, Validators.email]),
    password: new FormControl<string>("",[Validators.required])
   })
  }

  protected submit(): void{
    // console.log(this.loginForm);
    const user: LoginUser = {
      email: this.loginForm.value["email"],
      password: this.loginForm.value["password"]
    }
    this.getToken(user)
      
  }

  private getToken(user: LoginUser): void{
    this.authService.login(user).subscribe({
      next: (resp: Tokens) => {
        localStorage.setItem("accessToken",resp.accessToken)
        localStorage.setItem("refreshToken",resp.refreshToken)
        this.getUser(resp.id)
      },
      error: (err) => {
        if (err.status === 401) {
          this.error = 'Invalid email or password. Please try again.';
        }else if (err.status === 404) {
          this.error = "User not found. Please try again."
        } else if (err.status === 500) {
          this.error = 'An error occurred on the server. Please try again later.';
        } else {
          this.error = 'An unexpected error occurred. Please try again.';
        }
      },
    });
  }

  private getUser(id: string): void{
    this.userService.getUser(id).subscribe({
      next: (resp: User) => {
        this.loggedUserService.setLoggedUser(resp);
        // console.log(this.loggedUserService.getLoggedUser());
        
        this.router.navigate(["/"]);},
      error: (err)=> console.log(err)
    })
  }
}
