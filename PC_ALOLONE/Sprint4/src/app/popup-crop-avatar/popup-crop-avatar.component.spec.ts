import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCropAvatarComponent } from './popup-crop-avatar.component';

describe('PopupCropAvatarComponent', () => {
  let component: PopupCropAvatarComponent;
  let fixture: ComponentFixture<PopupCropAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCropAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCropAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
