import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionCrearModal } from './ubicacion-crear-modal';

describe('UbicacionCrearModal', () => {
  let component: UbicacionCrearModal;
  let fixture: ComponentFixture<UbicacionCrearModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicacionCrearModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionCrearModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
