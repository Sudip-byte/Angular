import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorLandingComponent } from './donor-landing.component';

describe('DonorLandingComponent', () => {
  let component: DonorLandingComponent;
  let fixture: ComponentFixture<DonorLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
