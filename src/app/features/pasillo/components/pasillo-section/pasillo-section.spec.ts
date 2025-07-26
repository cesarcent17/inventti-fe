import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasilloSection } from './pasillo-section';

describe('PasilloSection', () => {
  let component: PasilloSection;
  let fixture: ComponentFixture<PasilloSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasilloSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasilloSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
