import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSolicitudesNuevosUsuariosComponent } from './listado-solicitudes-nuevos-usuarios.component';

describe('ListadoSolicitudesNuevosUsuariosComponent', () => {
  let component: ListadoSolicitudesNuevosUsuariosComponent;
  let fixture: ComponentFixture<ListadoSolicitudesNuevosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoSolicitudesNuevosUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSolicitudesNuevosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
