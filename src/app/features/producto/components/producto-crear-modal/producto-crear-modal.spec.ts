import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCrearModal } from './producto-crear-modal';

describe('ProductoCrearModal', () => {
  let component: ProductoCrearModal;
  let fixture: ComponentFixture<ProductoCrearModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCrearModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCrearModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
