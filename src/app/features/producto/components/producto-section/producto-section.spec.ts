import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSection } from './producto-section';

describe('ProductoSection', () => {
  let component: ProductoSection;
  let fixture: ComponentFixture<ProductoSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
