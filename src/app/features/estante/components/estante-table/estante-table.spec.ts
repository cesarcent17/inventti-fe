import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanteTable } from './estante-table';

describe('EstanteTable', () => {
  let component: EstanteTable;
  let fixture: ComponentFixture<EstanteTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstanteTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstanteTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
