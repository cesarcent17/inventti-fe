import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCrearModal } from './marca-crear-modal';

describe('MarcaCrearModal', () => {
  let component: MarcaCrearModal;
  let fixture: ComponentFixture<MarcaCrearModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaCrearModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaCrearModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
