import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalMemberComponent } from './approval-member.component';

describe('ApprovalMemberComponent', () => {
  let component: ApprovalMemberComponent;
  let fixture: ComponentFixture<ApprovalMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
