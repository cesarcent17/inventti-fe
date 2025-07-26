import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteCrearModal } from './lote-crear-modal';

describe('LoteCrearModal', () => {
  let component: LoteCrearModal;
  let fixture: ComponentFixture<LoteCrearModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteCrearModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteCrearModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
