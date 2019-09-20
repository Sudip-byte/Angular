import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationLandingComponent } from './donation-landing.component';

describe('DonationLandingComponent', () => {
  let component: DonationLandingComponent;
  let fixture: ComponentFixture<DonationLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
