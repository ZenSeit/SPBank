import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAccountButtomComponent } from './transfer-account-buttom.component';

describe('TransferAccountButtomComponent', () => {
  let component: TransferAccountButtomComponent;
  let fixture: ComponentFixture<TransferAccountButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferAccountButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferAccountButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
