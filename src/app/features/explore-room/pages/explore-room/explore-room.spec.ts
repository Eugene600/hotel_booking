import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRoom } from './explore-room';

describe('ExploreRoom', () => {
  let component: ExploreRoom;
  let fixture: ComponentFixture<ExploreRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreRoom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreRoom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
