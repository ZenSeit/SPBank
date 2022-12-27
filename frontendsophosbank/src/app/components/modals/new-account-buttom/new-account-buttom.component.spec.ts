import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountButtomComponent } from './new-account-buttom.component';

describe('NewAccountButtomComponent', () => {
  let component: NewAccountButtomComponent;
  let fixture: ComponentFixture<NewAccountButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAccountButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAccountButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
