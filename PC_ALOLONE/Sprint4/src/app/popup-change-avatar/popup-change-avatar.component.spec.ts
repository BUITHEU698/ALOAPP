import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChangeAvatarComponent } from './popup-change-avatar.component';

describe('PopupChangeAvatarComponent', () => {
  let component: PopupChangeAvatarComponent;
  let fixture: ComponentFixture<PopupChangeAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupChangeAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupChangeAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
