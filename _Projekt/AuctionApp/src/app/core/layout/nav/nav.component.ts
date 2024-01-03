import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit{

  protected user: User | null = null;

  constructor(
    private loggedUserService: LoggedUserService,
    private router: Router, 
    private cdr: ChangeDetectorRef) {}

    public ngOnInit(): void {
      this.user = this.loggedUserService.getLoggedUser();
    
      this.loggedUserService.loggedUserChanged.subscribe((newUser: User | null) => {
        this.user = newUser;
        console.log(newUser);
      });
    }

  protected goToHome(): void {
    this.router.navigate(['/']);
  }

  protected goToCart(): void {
    this.router.navigate(['cart']);
  }

  protected goToAccount(): void {
    this.router.navigate(['user']);
  }

  protected goToLogin(): void {
    this.router.navigate(['login']);
  }

  protected logOut(): void {
    this.loggedUserService.logout();
    this.cdr.detectChanges();
  }

}
