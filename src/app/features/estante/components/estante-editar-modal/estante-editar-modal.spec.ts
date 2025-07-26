import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanteEditarModal } from './estante-editar-modal';

describe('EstanteEditarModal', () => {
  let component: EstanteEditarModal;
  let fixture: ComponentFixture<EstanteEditarModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstanteEditarModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstanteEditarModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
