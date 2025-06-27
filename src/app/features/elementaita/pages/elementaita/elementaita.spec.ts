import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elementaita } from './elementaita';

describe('Elementaita', () => {
  let component: Elementaita;
  let fixture: ComponentFixture<Elementaita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elementaita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elementaita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
