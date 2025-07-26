import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasilloTable } from './pasillo-table';

describe('PasilloTable', () => {
  let component: PasilloTable;
  let fixture: ComponentFixture<PasilloTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasilloTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasilloTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
