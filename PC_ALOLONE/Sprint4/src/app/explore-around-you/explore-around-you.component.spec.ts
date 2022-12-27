import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAroundYouComponent } from './explore-around-you.component';

describe('ExploreAroundYouComponent', () => {
  let component: ExploreAroundYouComponent;
  let fixture: ComponentFixture<ExploreAroundYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreAroundYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreAroundYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
