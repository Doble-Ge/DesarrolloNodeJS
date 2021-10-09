import { TestBed } from '@angular/core/testing';

import { NotasExternasService } from './notas-externas.service';

describe('NotasExternasService', () => {
  let service: NotasExternasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasExternasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
