import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaNotaImprimirComponent } from './caratula-nota-imprimir.component';

describe('CaratulaNotaImprimirComponent', () => {
  let component: CaratulaNotaImprimirComponent;
  let fixture: ComponentFixture<CaratulaNotaImprimirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaratulaNotaImprimirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaratulaNotaImprimirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
