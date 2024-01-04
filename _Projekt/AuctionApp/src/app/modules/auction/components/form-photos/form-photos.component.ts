import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoForm } from '../../models/auction-form.model';

@Component({
  selector: 'app-form-photos',
  templateUrl: './form-photos.component.html',
  styleUrls: ['./form-photos.component.scss']
})
export class FormPhotosComponent {

  @Input() public photosForm!: FormGroup<PhotoForm>;

  public constructor(){};

}
