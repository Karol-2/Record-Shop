import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AuctionForm, PhotoForm } from '../../models/auction-form.model';
import { AuctionFormService } from '../../services/auction-form.service';
import { ActivatedRoute } from '@angular/router';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-auction-form',
  templateUrl: './auction-form.component.html',
  styleUrls: ['./auction-form.component.scss']
})
export class AuctionFormComponent implements OnInit{
  private editMode: boolean = false;

  protected formTitle: string = "Add New Auction";
  protected existingAuction!: Auction;

  protected auctionForm: FormGroup<AuctionForm> = this.auctionFormService.auctionForm;

  public constructor(private auctionFormService: AuctionFormService, private route: ActivatedRoute,){};

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        const id: string = params['id'];
        this.formTitle = "Edit Auction " + id
        this.editMode = true;

        this.route.data.subscribe((data) => {
          this.existingAuction = data['auction'].auction;
          console.log(this.existingAuction);
          //TODO: w innym wypadku przekieruj na strone z bledem
        });
      }

      //   this.todoService.getById(this.todoID).subscribe((todo: Todo)=>{
      //     this.newTodo.name = todo.name;
      //     this.newTodo.isComplete = todo.isComplete;
      //   },
      //   (error: HttpErrorResponse)=> {console.log("ERROR",error)})
      // }
      //TODO: kinda useful maybe
    })

  }

  get photos(){
    return this.auctionForm.controls.photos as FormArray<FormGroup<PhotoForm>>;
  }

  protected addPhoto(): void{
    this.auctionFormService.addPhoto();
  }

  protected removePhoto(index: number): void{
    this.auctionFormService.removePhoto(index);
  }

  protected onSubmit():void{
    console.log(this.auctionForm);
  }

}
