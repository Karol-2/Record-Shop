import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuctionForm, PhotoForm } from '../models/auction-form.model';
import { Auction } from 'src/app/shared/models/Auction.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionFormService {

  public auctionForm = new FormGroup<AuctionForm>({
    artistName: new FormControl<string>( '',[Validators.required, Validators.minLength(2)]),
    albumName: new FormControl<string>( '',[Validators.required, Validators.minLength(2)]),
    categoryId: new FormControl<number>( 0,[Validators.required]),
    type: new FormControl<string>( '',[Validators.required]),
    price: new FormControl<number>(0.99,[Validators.required, Validators.min(0.99)]),
    description: new FormControl<string>( '',[Validators.required, Validators.minLength(10)]),
    photos: new FormArray<FormGroup<PhotoForm>>([], [Validators.required, Validators.maxLength(6)])
  })

  public constructor() { }

  public addPhoto(): void {
    this.auctionForm.controls.photos?.push(new FormGroup<PhotoForm>({
      photo: new FormControl<string>('',[Validators.required]),
    }))
  }

  public removePhoto(index: number): void{
    this.auctionForm.controls.photos?.removeAt(index);
  }

  public setInitialData(auction: Auction): void{  
    // patch values
    this.auctionForm.patchValue({
      artistName: auction.artistName,
      albumName: auction.albumName,
      categoryId: auction.categoryId,
      type: auction.type,
      price: auction.price,
      description: auction.description,
    });
  
    // clear photos
    const photoFormArray = this.auctionForm.get('photos') as FormArray<FormGroup<PhotoForm>>;
    photoFormArray.clear();
  
    // add photos
    auction.photos.forEach((photoUrl: string) => {
      this.addPhoto();
      const lastIndex = photoFormArray.length - 1;
      const photoFormGroup = photoFormArray.at(lastIndex) as FormGroup<PhotoForm>;
      photoFormGroup.patchValue({ photo: photoUrl });
    });
  }

  public resetForm(): void {
    this.auctionForm.reset();
    const photosFormArray = this.auctionForm.get('photos') as FormArray<FormGroup<PhotoForm>>;
    photosFormArray.clear();
  }
}
