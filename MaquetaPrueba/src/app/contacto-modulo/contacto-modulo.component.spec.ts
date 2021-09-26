import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoModuloComponent } from './contacto-modulo.component';

describe('ContactoModuloComponent', () => {
  let component: ContactoModuloComponent;
  let fixture: ComponentFixture<ContactoModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
