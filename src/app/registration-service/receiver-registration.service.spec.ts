import { TestBed } from '@angular/core/testing';

import { ReceiverRegistrationService } from './receiver-registration.service';

describe('ReceiverRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiverRegistrationService = TestBed.get(ReceiverRegistrationService);
    expect(service).toBeTruthy();
  });
});
