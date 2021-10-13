import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoConsultasContactosComponent } from './listado-consultas-contactos.component';

describe('ListadoConsultasContactosComponent', () => {
  let component: ListadoConsultasContactosComponent;
  let fixture: ComponentFixture<ListadoConsultasContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoConsultasContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoConsultasContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
