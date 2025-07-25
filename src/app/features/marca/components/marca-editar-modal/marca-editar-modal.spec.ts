import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaEditarModal } from './marca-editar-modal';

describe('MarcaEditarModal', () => {
  let component: MarcaEditarModal;
  let fixture: ComponentFixture<MarcaEditarModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaEditarModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaEditarModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
