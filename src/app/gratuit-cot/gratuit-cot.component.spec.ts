import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuitCotComponent } from './gratuit-cot.component';

describe('GratuitCotComponent', () => {
  let component: GratuitCotComponent;
  let fixture: ComponentFixture<GratuitCotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GratuitCotComponent]
    });
    fixture = TestBed.createComponent(GratuitCotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
