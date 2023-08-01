import { TestBed } from '@angular/core/testing';

import { MembreServiceService } from './membre-service.service';

describe('MembreServiceService', () => {
  let service: MembreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
