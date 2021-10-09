import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarNotasComponent } from './generar-notas.component';

describe('GenerarNotasComponent', () => {
  let component: GenerarNotasComponent;
  let fixture: ComponentFixture<GenerarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
