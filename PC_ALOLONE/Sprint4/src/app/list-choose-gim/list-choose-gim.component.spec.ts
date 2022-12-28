import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChooseGimComponent } from './list-choose-gim.component';

describe('ListChooseGimComponent', () => {
  let component: ListChooseGimComponent;
  let fixture: ComponentFixture<ListChooseGimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChooseGimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChooseGimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
