import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitiesIcons } from './amenities-icons';

describe('AmenitiesIcons', () => {
  let component: AmenitiesIcons;
  let fixture: ComponentFixture<AmenitiesIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmenitiesIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmenitiesIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
