import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnToTopArrowComponent } from './return-to-top-arrow.component';

describe('ReturnToTopArrowComponent', () => {
  let component: ReturnToTopArrowComponent;
  let fixture: ComponentFixture<ReturnToTopArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnToTopArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnToTopArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
