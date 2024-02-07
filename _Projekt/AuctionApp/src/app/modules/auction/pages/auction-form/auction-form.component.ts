import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { AuctionForm, PhotoForm } from '../../models/auction-form.model';
import { AuctionFormService } from '../../services/auction-form.service';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Auction } from 'src/app/shared/models/Auction.model';
import { Type } from 'src/app/shared/enums/Type.enum';
import { AuctionService } from 'src/app/features/services/auction.service';
import CreateAuction from 'src/app/features/dto/create-auction.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/shared/enums/Category.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auction-form',
  templateUrl: './auction-form.component.html',
  styleUrls: ['./auction-form.component.scss']
})
export class AuctionFormComponent implements OnInit{
  private editMode: boolean = false;

  protected formTitle: string = "Add New Auction";
  protected existingAuction!: Auction;
  protected typeValues: Type[] = Object.values(Type);
  protected categoryValues: Category[] = Object.values(Category);
  protected message: string = "";


  protected auctionForm: FormGroup<AuctionForm> = this.auctionFormService.auctionForm;

  public constructor(
    private auctionFormService: AuctionFormService, 
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private SnackBar: MatSnackBar
  ){}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params['id']) {
        const id: string = params['id'];
        this.formTitle = "Edit Auction " + id;
        this.editMode = true;

        this.route.data.subscribe((data: Data) => {
          this.existingAuction = data['auction'].auction;

          if (this.editMode) {
            this.auctionFormService.setInitialData(this.existingAuction);
          }
        
        });
      } else{
        this.editMode = false;
        this.auctionFormService.resetForm();
      }
    });

  }

  public get photos(): FormArray<FormGroup<PhotoForm>>{
    return this.auctionForm.controls.photos as FormArray<FormGroup<PhotoForm>>;
  }

  protected addPhoto(): void{
    this.auctionFormService.addPhoto();
  }

  protected removePhoto(index: number): void{
    this.auctionFormService.removePhoto(index);
  }

  protected onSubmit(): void{
    if(this.editMode){
      this.handleEditReq();
    } else {
      this.handleAddReq();
    }
  }

  protected clearForm(): void{
    this.auctionFormService.resetForm();
  }

  private handleAddReq(): void{
    const form: FormGroup<AuctionForm> = this.auctionForm;

    const photos: string[] = (form.value.photos || [])
      .map((photoForm: Partial<{ photo: string | null }>) => {
        return photoForm.photo ?? "";
      });

    const newAuction: CreateAuction = {
      albumName: form.value.albumName ? form.value.albumName : "",
      artistName: form.value.artistName ? form.value.artistName : "" ,
      category: form.value.category ? form.value.category : Category.POP ,
      description: form.value.description ? form.value.description : "" ,
      photos: photos,
      price: form.value.price ? form.value.price : -1,
      type: form.value.type ? form.value.type : Type.CD ,
    };

    this.auctionService.createAuction(newAuction).subscribe({
      next: ()=>{
        this.message = "Success!";
        this.openSnackBar(this.message);
        this.auctionFormService.resetForm();
      }, 
      error: (err: HttpErrorResponse)=>{
        this.message = err.error.message;
        this.openSnackBar(this.message);
      }
        
    });}


  private handleEditReq(): void{
    const form: FormGroup<AuctionForm> = this.auctionForm;

    const photos: string[] = (form.value.photos || [])
      .map((photoForm: Partial<{ photo: string | null }>) => {
        return photoForm.photo ?? '';
      });

    const editedAuction: Auction = {
      ...this.existingAuction,
      albumName: form.value.albumName? form.value.albumName : "",
      artistName: form.value.artistName ? form.value.artistName : "",
      category: form.value.category ? form.value.category : Category.POP ,
      description: form.value.description ? form.value.description : "",
      photos: photos,
      price: form.value.price ? form.value.price : -1,
      type: form.value.type ? form.value.type as Type : Type.CD,
    };

    this.auctionService.updateAuction(editedAuction.id,editedAuction).subscribe({
      next: ()=>{
        this.message = "Success!";
        this.openSnackBar(this.message);
        this.auctionFormService.resetForm();
      }, 
      error: (err: HttpErrorResponse)=>{
        this.message = err.error.message;
        this.openSnackBar(this.message);
    
      }     
    });}
    

  protected openSnackBar(message: string): void {
    this.SnackBar.open(message, 'OK');
  }

}
