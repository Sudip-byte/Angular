import { TestBed } from '@angular/core/testing';

import { ValuepassService } from './valuepass.service';

describe('ValuepassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValuepassService = TestBed.get(ValuepassService);
    expect(service).toBeTruthy();
  });
});
