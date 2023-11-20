import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddedProductComponent } from './last-added-product.component';

describe('LastAddedProductComponent', () => {
  let component: LastAddedProductComponent;
  let fixture: ComponentFixture<LastAddedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastAddedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastAddedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
