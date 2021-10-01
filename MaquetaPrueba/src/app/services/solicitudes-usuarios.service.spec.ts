import { TestBed } from '@angular/core/testing';

import { SolicitudesUsuariosService } from './solicitudes-usuarios.service';

describe('SolicitudesUsuariosService', () => {
  let service: SolicitudesUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
