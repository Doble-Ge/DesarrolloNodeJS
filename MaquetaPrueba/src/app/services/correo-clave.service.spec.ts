import { TestBed } from '@angular/core/testing';

import { CorreoClaveService } from './correo-clave.service';

describe('CorreoClaveService', () => {
  let service: CorreoClaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorreoClaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
