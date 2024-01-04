import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuctionForm, PhotoForm } from '../models/auction-form.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionFormService {

  auctionForm = new FormGroup<AuctionForm>({
    artistName: new FormControl<string>('',[Validators.required, Validators.minLength(2)]),
    albumName: new FormControl<string>('',[Validators.required, Validators.minLength(2)]),
    categoryId: new FormControl<number>(0,[Validators.required]),
    type: new FormControl<string>('',[Validators.required]),
    price: new FormControl<number>(0.99,[Validators.required, Validators.min(0.99)]),
    description: new FormControl<string>('',[Validators.required, Validators.minLength(10)]),
    photos: new FormArray<FormGroup<PhotoForm>>([]) //TODO: validate amount of photos 1-6
  })

  constructor() { }

  addPhoto() {
    this.auctionForm.controls.photos?.push(new FormGroup<PhotoForm>({
      photo: new FormControl<string>('',[Validators.required]), //TODO: create link validator, photo format validator
    }))
  }

  removePhoto(index: number){
    this.auctionForm.controls.photos?.removeAt(index);
  }

}
