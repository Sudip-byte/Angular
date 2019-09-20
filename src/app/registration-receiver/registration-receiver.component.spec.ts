import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationReceiverComponent } from './registration-receiver.component';

describe('RegistrationReceiverComponent', () => {
  let component: RegistrationReceiverComponent;
  let fixture: ComponentFixture<RegistrationReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
