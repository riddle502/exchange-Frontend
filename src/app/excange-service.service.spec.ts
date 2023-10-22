import { TestBed } from '@angular/core/testing';

import { ExcangeServiceService } from './excange-service.service';

describe('ExcangeServiceService', () => {
  let service: ExcangeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcangeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
