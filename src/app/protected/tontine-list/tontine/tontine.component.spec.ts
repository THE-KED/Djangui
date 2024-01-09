import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineComponent } from './tontine.component';

describe('TontineComponent', () => {
  let component: TontineComponent;
  let fixture: ComponentFixture<TontineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TontineComponent]
    });
    fixture = TestBed.createComponent(TontineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
