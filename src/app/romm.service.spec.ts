import { TestBed } from '@angular/core/testing';

import { RommService } from './romm.service';

describe('RommService', () => {
  let service: RommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
