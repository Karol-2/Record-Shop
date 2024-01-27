import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/features/services/user.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss'],
})
export class UserDisplayComponent {
  @Input() public user!: User;
  @Input() public usersTab: User[] = [];
  @Output() public updatedUserTab: EventEmitter<User[]> = new EventEmitter<User[]>();

  protected message: string = '';
  protected showModal: boolean = false;

  public constructor(private userService: UserService,  private _snackBar: MatSnackBar) {}

  protected removeUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.message = 'Success';
        this.changeVisibility();
        this.openSnackBar(this.message);

        let updated: User[] = this.usersTab.filter((user:User)=> {return user.id !== userId})
        this.updatedUserTab.emit(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.message = 'ERROR, ' + error.error.message;
        this.changeVisibility();
        this.openSnackBar(this.message);
      }
    });
  }

  protected changeVisibility(): void {
    this.showModal = !this.showModal;
  }

  
  protected openSnackBar(message: string) {
    this._snackBar.open(message, 'OK');
  }
}
