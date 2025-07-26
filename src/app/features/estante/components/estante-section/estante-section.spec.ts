import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanteSection } from './estante-section';

describe('EstanteSection', () => {
  let component: EstanteSection;
  let fixture: ComponentFixture<EstanteSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstanteSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstanteSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
