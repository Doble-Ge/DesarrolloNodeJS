import { TestBed } from '@angular/core/testing';

import { NotasExpPDFService } from './notas-exp-pdf.service';

describe('NotasExpPDFService', () => {
  let service: NotasExpPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasExpPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
