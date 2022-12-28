import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingMessComponent } from './menu-setting-mess.component';

describe('MenuSettingMessComponent', () => {
  let component: MenuSettingMessComponent;
  let fixture: ComponentFixture<MenuSettingMessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSettingMessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSettingMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
