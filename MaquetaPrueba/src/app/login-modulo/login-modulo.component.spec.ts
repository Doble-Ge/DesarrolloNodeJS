import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModuloComponent } from './login-modulo.component';

describe('LoginModuloComponent', () => {
  let component: LoginModuloComponent;
  let fixture: ComponentFixture<LoginModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
