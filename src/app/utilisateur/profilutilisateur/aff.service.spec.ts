import { TestBed } from '@angular/core/testing';

import { AffService } from './aff.service';

describe('AffService', () => {
  let service: AffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
