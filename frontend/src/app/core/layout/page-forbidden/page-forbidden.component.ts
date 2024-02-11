import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-forbidden',
  templateUrl: './page-forbidden.component.html',
  styleUrls: ['./page-forbidden.component.scss']
})
export class PageForbiddenComponent {
  
  public constructor(private router: Router, private route: ActivatedRoute){}

  protected endpoint: string = this.route.snapshot.url.join('/');

  protected goToHompage(): void{
    this.router.navigate(['/']);
  }

}
