import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserButtonComponent } from './new-user-button.component';

describe('NewUserButtonComponent', () => {
  let component: NewUserButtonComponent;
  let fixture: ComponentFixture<NewUserButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
