import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSolicitudAgrimensorComponent } from './nueva-solicitud-agrimensor.component';

describe('NuevaSolicitudAgrimensorComponent', () => {
  let component: NuevaSolicitudAgrimensorComponent;
  let fixture: ComponentFixture<NuevaSolicitudAgrimensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaSolicitudAgrimensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSolicitudAgrimensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
