import { TestBed } from '@angular/core/testing';

import { PerfectngproService } from './perfectngpro.service';

describe('PerfectngproService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfectngproService = TestBed.get(PerfectngproService);
    expect(service).toBeTruthy();
  });
});
