import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimeLimitComponent } from './set-time-limit.component';

describe('SetTimeLimitComponent', () => {
  let component: SetTimeLimitComponent;
  let fixture: ComponentFixture<SetTimeLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTimeLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTimeLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
