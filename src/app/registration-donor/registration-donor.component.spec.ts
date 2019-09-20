import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDonorComponent } from './registration-donor.component';

describe('RegistrationDonorComponent', () => {
  let component: RegistrationDonorComponent;
  let fixture: ComponentFixture<RegistrationDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
