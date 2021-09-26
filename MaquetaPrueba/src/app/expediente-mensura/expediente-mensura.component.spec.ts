import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteMensuraComponent } from './expediente-mensura.component';

describe('ExpedienteMensuraComponent', () => {
  let component: ExpedienteMensuraComponent;
  let fixture: ComponentFixture<ExpedienteMensuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpedienteMensuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedienteMensuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
