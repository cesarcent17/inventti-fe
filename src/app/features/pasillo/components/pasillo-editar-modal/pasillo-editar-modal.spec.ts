import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasilloEditarModal } from './pasillo-editar-modal';

describe('PasilloEditarModal', () => {
  let component: PasilloEditarModal;
  let fixture: ComponentFixture<PasilloEditarModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasilloEditarModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasilloEditarModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
