import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionNotFoundComponent } from './auction-not-found.component';

describe('AuctionNotFoundComponent', () => {
  let component: AuctionNotFoundComponent;
  let fixture: ComponentFixture<AuctionNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionNotFoundComponent]
    });
    fixture = TestBed.createComponent(AuctionNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
