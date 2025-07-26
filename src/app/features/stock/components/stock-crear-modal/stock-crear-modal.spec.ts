import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCrearModal } from './stock-crear-modal';

describe('StockCrearModal', () => {
  let component: StockCrearModal;
  let fixture: ComponentFixture<StockCrearModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockCrearModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCrearModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
