import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAccountButtomComponent } from './credit-account-buttom.component';

describe('CreditAccountButtomComponent', () => {
  let component: CreditAccountButtomComponent;
  let fixture: ComponentFixture<CreditAccountButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditAccountButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditAccountButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
