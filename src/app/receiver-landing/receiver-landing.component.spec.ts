import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverLandingComponent } from './receiver-landing.component';

describe('ReceiverLandingComponent', () => {
  let component: ReceiverLandingComponent;
  let fixture: ComponentFixture<ReceiverLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
