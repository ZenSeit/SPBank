import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsAccountTableComponent } from './transactions-account-table.component';

describe('TransactionsAccountTableComponent', () => {
  let component: TransactionsAccountTableComponent;
  let fixture: ComponentFixture<TransactionsAccountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsAccountTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsAccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
