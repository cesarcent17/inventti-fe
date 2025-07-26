import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMedidaCrearModal } from './unidad-medida-crear-modal';

describe('UnidadMedidaCrearModal', () => {
  let component: UnidadMedidaCrearModal;
  let fixture: ComponentFixture<UnidadMedidaCrearModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadMedidaCrearModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadMedidaCrearModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
