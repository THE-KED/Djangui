import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotisationDBComponent } from './cotisation-db.component';

describe('CotisationDBComponent', () => {
  let component: CotisationDBComponent;
  let fixture: ComponentFixture<CotisationDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotisationDBComponent]
    });
    fixture = TestBed.createComponent(CotisationDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
