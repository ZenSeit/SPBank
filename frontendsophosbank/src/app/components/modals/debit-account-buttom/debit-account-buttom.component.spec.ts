import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitAccountButtomComponent } from './debit-account-buttom.component';

describe('DebitAccountButtomComponent', () => {
  let component: DebitAccountButtomComponent;
  let fixture: ComponentFixture<DebitAccountButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitAccountButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitAccountButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
