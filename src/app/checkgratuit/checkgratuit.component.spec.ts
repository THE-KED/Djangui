import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckgratuitComponent } from './checkgratuit.component';

describe('CheckgratuitComponent', () => {
  let component: CheckgratuitComponent;
  let fixture: ComponentFixture<CheckgratuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckgratuitComponent]
    });
    fixture = TestBed.createComponent(CheckgratuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
