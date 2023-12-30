import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private  authService: AuthService, private cdr: ChangeDetectorRef, private router: Router){}

  protected currentUser: string = ""

  protected username: string = "";
  protected password: string = "";

  public login(): void{
    if (this.authService.loginUser(this.username,this.password)){
      this.currentUser = localStorage.getItem("user") || "";
      this.cdr.detectChanges();
    }
  }

  public logout(): void{
    this.authService.logout();
    this.currentUser = ""
    this.router.navigate(["/"])
  }

  ngOnInit(): void {
      if(localStorage.getItem("user")){
        this.currentUser = localStorage.getItem("user")!
      } else {
        this.currentUser = ""
      }
    }


}
