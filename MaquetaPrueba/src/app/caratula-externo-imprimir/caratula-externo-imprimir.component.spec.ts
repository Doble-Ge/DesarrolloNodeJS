import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaExternoImprimirComponent } from './caratula-externo-imprimir.component';

describe('CaratulaExternoImprimirComponent', () => {
  let component: CaratulaExternoImprimirComponent;
  let fixture: ComponentFixture<CaratulaExternoImprimirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaratulaExternoImprimirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaratulaExternoImprimirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
