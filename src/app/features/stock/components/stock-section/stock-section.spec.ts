import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSection } from './stock-section';

describe('StockSection', () => {
  let component: StockSection;
  let fixture: ComponentFixture<StockSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
