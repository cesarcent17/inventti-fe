import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMedidaTable } from './unidad-medida-table';

describe('UnidadMedidaTable', () => {
  let component: UnidadMedidaTable;
  let fixture: ComponentFixture<UnidadMedidaTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadMedidaTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadMedidaTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
