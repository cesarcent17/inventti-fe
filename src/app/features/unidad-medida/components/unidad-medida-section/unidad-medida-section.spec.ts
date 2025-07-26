import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMedidaSection } from './unidad-medida-section';

describe('UnidadMedidaSection', () => {
  let component: UnidadMedidaSection;
  let fixture: ComponentFixture<UnidadMedidaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadMedidaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadMedidaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
