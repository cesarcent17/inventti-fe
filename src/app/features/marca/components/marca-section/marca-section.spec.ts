import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaSection } from './marca-section';

describe('MarcaSection', () => {
  let component: MarcaSection;
  let fixture: ComponentFixture<MarcaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
