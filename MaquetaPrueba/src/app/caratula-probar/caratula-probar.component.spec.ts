import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaProbarComponent } from './caratula-probar.component';

describe('CaratulaProbarComponent', () => {
  let component: CaratulaProbarComponent;
  let fixture: ComponentFixture<CaratulaProbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaratulaProbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaratulaProbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
