import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nairobi } from './nairobi';

describe('Nairobi', () => {
  let component: Nairobi;
  let fixture: ComponentFixture<Nairobi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nairobi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nairobi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
