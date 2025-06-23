import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowPayLater } from './book-now-pay-later';

describe('BookNowPayLater', () => {
  let component: BookNowPayLater;
  let fixture: ComponentFixture<BookNowPayLater>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookNowPayLater]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNowPayLater);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
