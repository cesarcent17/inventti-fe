import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanteCrearModal } from './estante-crear-modal';

describe('EstanteCrearModal', () => {
  let component: EstanteCrearModal;
  let fixture: ComponentFixture<EstanteCrearModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstanteCrearModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstanteCrearModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
