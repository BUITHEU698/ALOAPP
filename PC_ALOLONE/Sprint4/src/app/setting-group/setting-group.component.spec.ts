import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingGroupComponent } from './setting-group.component';

describe('SettingGroupComponent', () => {
  let component: SettingGroupComponent;
  let fixture: ComponentFixture<SettingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
