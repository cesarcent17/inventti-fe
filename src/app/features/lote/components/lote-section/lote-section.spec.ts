import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteSection } from './lote-section';

describe('LoteSection', () => {
  let component: LoteSection;
  let fixture: ComponentFixture<LoteSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
