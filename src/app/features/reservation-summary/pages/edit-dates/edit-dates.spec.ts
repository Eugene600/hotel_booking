import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDates } from './edit-dates';

describe('EditDates', () => {
  let component: EditDates;
  let fixture: ComponentFixture<EditDates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
