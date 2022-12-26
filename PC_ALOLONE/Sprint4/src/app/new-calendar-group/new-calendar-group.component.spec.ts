import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCalendarGroupComponent } from './new-calendar-group.component';

describe('NewCalendarGroupComponent', () => {
  let component: NewCalendarGroupComponent;
  let fixture: ComponentFixture<NewCalendarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCalendarGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCalendarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
