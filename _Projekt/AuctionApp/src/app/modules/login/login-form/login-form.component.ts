import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import LoginUser from 'src/app/features/dto/login-user.model';
import { AuthService } from 'src/app/features/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  protected loginForm!: FormGroup;

  constructor(private authService: AuthService){}

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
    console.log(user)
    
  }
}
