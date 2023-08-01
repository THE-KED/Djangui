import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtontineComponent } from './showtontine.component';

describe('ShowtontineComponent', () => {
  let component: ShowtontineComponent;
  let fixture: ComponentFixture<ShowtontineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowtontineComponent]
    });
    fixture = TestBed.createComponent(ShowtontineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
