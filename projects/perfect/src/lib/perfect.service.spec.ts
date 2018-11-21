import { TestBed } from '@angular/core/testing';

import { PerfectService } from './perfect.service';

describe('PerfectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfectService = TestBed.get(PerfectService);
    expect(service).toBeTruthy();
  });
});
