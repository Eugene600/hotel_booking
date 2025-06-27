import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mombasa } from './mombasa';

describe('Mombasa', () => {
  let component: Mombasa;
  let fixture: ComponentFixture<Mombasa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mombasa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mombasa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
