import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteEditarModal } from './lote-editar-modal';

describe('LoteEditarModal', () => {
  let component: LoteEditarModal;
  let fixture: ComponentFixture<LoteEditarModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteEditarModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteEditarModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
