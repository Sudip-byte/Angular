import { TestBed } from '@angular/core/testing';

import { ReceiverLandingService } from './receiver-landing.service';

describe('ReceiverLandingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiverLandingService = TestBed.get(ReceiverLandingService);
    expect(service).toBeTruthy();
  });
});
