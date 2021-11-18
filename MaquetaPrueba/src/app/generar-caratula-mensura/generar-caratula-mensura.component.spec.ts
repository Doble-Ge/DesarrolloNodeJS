import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCaratulaMensuraComponent } from './generar-caratula-mensura.component';

describe('GenerarCaratulaMensuraComponent', () => {
  let component: GenerarCaratulaMensuraComponent;
  let fixture: ComponentFixture<GenerarCaratulaMensuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarCaratulaMensuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarCaratulaMensuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
