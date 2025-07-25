import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEditarModal } from './producto-editar-modal';

describe('ProductoEditarModal', () => {
  let component: ProductoEditarModal;
  let fixture: ComponentFixture<ProductoEditarModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoEditarModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoEditarModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
