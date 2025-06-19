import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDisplay } from './room-display';

describe('RoomDisplay', () => {
  let component: RoomDisplay;
  let fixture: ComponentFixture<RoomDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
