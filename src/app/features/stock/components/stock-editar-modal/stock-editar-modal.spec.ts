import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEditarModal } from './stock-editar-modal';

describe('StockEditarModal', () => {
  let component: StockEditarModal;
  let fixture: ComponentFixture<StockEditarModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockEditarModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockEditarModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
