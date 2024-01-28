import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrls: ['./go-back-button.component.scss']
})
export class GoBackButtonComponent {
  public constructor(private location: Location){}

  protected goBack(): void{
    this.location.back();
  }
}
