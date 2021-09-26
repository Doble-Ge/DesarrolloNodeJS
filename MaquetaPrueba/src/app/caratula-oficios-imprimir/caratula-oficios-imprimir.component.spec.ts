import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaOficiosImprimirComponent } from './caratula-oficios-imprimir.component';

describe('CaratulaOficiosImprimirComponent', () => {
  let component: CaratulaOficiosImprimirComponent;
  let fixture: ComponentFixture<CaratulaOficiosImprimirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaratulaOficiosImprimirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaratulaOficiosImprimirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
