import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame3143Component } from './frame3143.component';

describe('Frame3143Component', () => {
  let component: Frame3143Component;
  let fixture: ComponentFixture<Frame3143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frame3143Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frame3143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
