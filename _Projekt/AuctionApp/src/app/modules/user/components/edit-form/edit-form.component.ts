import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CapitalLetterDirective } from 'src/app/shared/directives/capital-letter.directive';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  protected editForm!: FormGroup;
  protected error: String = "";
  
  private user!:User;

  public ngOnInit(): void {
    
    const result: string | null = localStorage.getItem("user");
    if(result){
      this.user = JSON.parse(result);
    }

    this.editForm = new FormGroup({
      firstName: new FormControl<string>("user",[Validators.minLength(3), Validators.required]),
      lastName: new FormControl<string>("user",[Validators.minLength(3), Validators.required]),
      email: new FormControl<string>("user",[Validators.email, Validators.required]),
      password: new FormControl<string>("user",[Validators.required, Validators.minLength(5)]),
    })
    //TODO: add user placeholder data
    //TODO: add sending to backend
  }
  
  protected submit():void{
    console.log(this.editForm);
  }
}
