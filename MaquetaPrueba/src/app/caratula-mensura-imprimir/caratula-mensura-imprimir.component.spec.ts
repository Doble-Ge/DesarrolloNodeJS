import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaMensuraImprimirComponent } from './caratula-mensura-imprimir.component';

describe('CaratulaMensuraImprimirComponent', () => {
  let component: CaratulaMensuraImprimirComponent;
  let fixture: ComponentFixture<CaratulaMensuraImprimirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaratulaMensuraImprimirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaratulaMensuraImprimirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
