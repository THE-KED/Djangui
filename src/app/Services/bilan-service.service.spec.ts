import { TestBed } from '@angular/core/testing';

import { BilanServiceService } from './bilan-service.service';

describe('BilanServiceService', () => {
  let service: BilanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
