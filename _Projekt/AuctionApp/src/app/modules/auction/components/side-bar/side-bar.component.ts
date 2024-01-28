import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared/enums/Category.enum';
import { Type } from 'src/app/shared/enums/Type.enum';
import { Auction } from 'src/app/shared/models/Auction.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{

  protected categoryValues:Category[] = Object.values(Category)

  public constructor( private route: ActivatedRoute, private router: Router){};
  
  // ============= SORTING ==========

  @Input() public auctions!: Auction[];
  protected sortValue: string = "";
  protected sortOrder: string = "";

  protected sortAuctions() {
    if (this.sortValue) {
      this.auctions.sort((a, b) => {
        const valueA = this.getValueForSorting(a, this.sortValue);
        const valueB = this.getValueForSorting(b, this.sortValue);
  
        if (this.sortOrder === 'asc') {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueB < valueA ? -1 : valueB > valueA ? 1 : 0;
        }
      });
    }
    
  }
  
  private getValueForSorting(auction: Auction, sortField: string): string | number | Date {
    switch (sortField) {
      case 'artistName':
        return auction.artistName;
      case 'albumName':
        return auction.albumName
      case 'price':
        return auction.price;
      case 'dateCreated':
        return auction.dateCreated;
      default:
        return '';
    }
  }

  // ========== FILTERS =========

  protected filterForm!: FormGroup;

  public ngOnInit(): void {
    this.filterForm = new FormGroup({
      artistName: new FormControl<string | null>(null),
      category: new FormControl<string | null>(null),
      type: new FormControl<Type | null>(null),
      showFinished: new FormControl<boolean | null>(null),
      showOngoing: new FormControl<boolean | null>(null)
    })
  }

  protected onSubmitFilter(): void{
    this.updateUrl();
  }

  private updateUrl() {
    const queryParams = {
      type: this.filterForm.value.type,
      artistName: this.filterForm.value.artistName,
      category: this.filterForm.value.category,
      showFinished: this.filterForm.value.showFinished,
      showOngoing: this.filterForm.value.showOngoing
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge'
    });

  }
}
