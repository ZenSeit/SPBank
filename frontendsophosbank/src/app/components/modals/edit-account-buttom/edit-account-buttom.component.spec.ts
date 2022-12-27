import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountButtomComponent } from './edit-account-buttom.component';

describe('EditAccountButtomComponent', () => {
  let component: EditAccountButtomComponent;
  let fixture: ComponentFixture<EditAccountButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccountButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAccountButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
