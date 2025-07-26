import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMedidaEditarModal } from './unidad-medida-editar-modal';

describe('UnidadMedidaEditarModal', () => {
  let component: UnidadMedidaEditarModal;
  let fixture: ComponentFixture<UnidadMedidaEditarModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadMedidaEditarModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadMedidaEditarModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
