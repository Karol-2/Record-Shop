import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private router: Router, private route: ActivatedRoute){}

  protected endpoint:String = this.route.snapshot.url.join('/')

  protected goToHompage(): void{
    this.router.navigate(['/'])
  }
}
