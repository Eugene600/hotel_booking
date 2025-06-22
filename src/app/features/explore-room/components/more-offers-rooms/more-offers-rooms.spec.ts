import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOffersRooms } from './more-offers-rooms';

describe('MoreOffersRooms', () => {
  let component: MoreOffersRooms;
  let fixture: ComponentFixture<MoreOffersRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreOffersRooms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreOffersRooms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
