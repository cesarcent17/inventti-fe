import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteTable } from './lote-table';

describe('LoteTable', () => {
  let component: LoteTable;
  let fixture: ComponentFixture<LoteTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
