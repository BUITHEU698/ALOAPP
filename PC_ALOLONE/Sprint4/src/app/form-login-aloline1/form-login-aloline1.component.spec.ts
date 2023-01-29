import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginAloline1Component } from './form-login-aloline1.component';

describe('FormLoginAloline1Component', () => {
  let component: FormLoginAloline1Component;
  let fixture: ComponentFixture<FormLoginAloline1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoginAloline1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoginAloline1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
