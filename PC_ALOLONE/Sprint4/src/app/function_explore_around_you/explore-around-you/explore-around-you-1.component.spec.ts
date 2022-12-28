import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAroundYou_1Component } from './explore-around-you-1.component';

describe('ExploreAroundYouComponent', () => {
  let component: ExploreAroundYou_1Component;
  let fixture: ComponentFixture<ExploreAroundYou_1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreAroundYou_1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreAroundYou_1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
