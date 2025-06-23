import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPricing } from './room-pricing';

describe('RoomPricing', () => {
  let component: RoomPricing;
  let fixture: ComponentFixture<RoomPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomPricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
