import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCaratulasComponent } from './consulta-caratulas.component';

describe('ConsultaCaratulasComponent', () => {
  let component: ConsultaCaratulasComponent;
  let fixture: ComponentFixture<ConsultaCaratulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCaratulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCaratulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
