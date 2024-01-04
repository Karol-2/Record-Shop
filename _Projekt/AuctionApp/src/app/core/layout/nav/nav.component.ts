import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  protected user: User | null = null;
  private userSubscription!: Subscription;

  constructor(
    private loggedUserService: LoggedUserService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.user = this.loggedUserService.getLoggedUser();

    this.userSubscription = this.loggedUserService.loggedUserChanged().subscribe(user => {
      this.user = user;
        //TODO: fixs error
      setTimeout(() => {
        this.cdr.detectChanges();
      });
    });
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  protected goToHome(): void {
    this.router.navigate(['/']);
  }

  protected goToSearch(): void {
    this.router.navigate(['auctions']);
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
