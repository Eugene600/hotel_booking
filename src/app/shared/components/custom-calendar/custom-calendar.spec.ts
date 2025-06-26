import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCalendar } from './custom-calendar';

describe('CustomCalendar', () => {
  let component: CustomCalendar;
  let fixture: ComponentFixture<CustomCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
