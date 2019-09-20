import { TestBed } from '@angular/core/testing';

import { DonorLandingService } from './donor-landing.service';

describe('DonorLandingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonorLandingService = TestBed.get(DonorLandingService);
    expect(service).toBeTruthy();
  });
});
