import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesMensuraComponent } from './solicitudes-mensura.component';

describe('SolicitudesMensuraComponent', () => {
  let component: SolicitudesMensuraComponent;
  let fixture: ComponentFixture<SolicitudesMensuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesMensuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesMensuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
