import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasilloCrearModal } from './pasillo-crear-modal';

describe('PasilloCrearModal', () => {
  let component: PasilloCrearModal;
  let fixture: ComponentFixture<PasilloCrearModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasilloCrearModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasilloCrearModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
