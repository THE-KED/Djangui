import { TestBed } from '@angular/core/testing';

import { TontineServiceService } from './tontine-service.service';

describe('TontineServiceService', () => {
  let service: TontineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TontineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
