import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlecomeMessageComponent } from './wlecome-message.component';

describe('WlecomeMessageComponent', () => {
  let component: WlecomeMessageComponent;
  let fixture: ComponentFixture<WlecomeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlecomeMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WlecomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
