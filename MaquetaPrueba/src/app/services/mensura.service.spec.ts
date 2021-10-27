import { TestBed } from '@angular/core/testing';

import { MensuraService } from './mensura.service';

describe('MensuraService', () => {
  let service: MensuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
