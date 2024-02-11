import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  public constructor(private router: Router, private route: ActivatedRoute){}

  protected endpoint: string = this.route.snapshot.url.join('/');

  protected goToHompage(): void{
    this.router.navigate(['/']);
  }
}
