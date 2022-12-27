import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessPinnedComponent } from './list-mess-pinned.component';

describe('ListMessPinnedComponent', () => {
  let component: ListMessPinnedComponent;
  let fixture: ComponentFixture<ListMessPinnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMessPinnedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMessPinnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
