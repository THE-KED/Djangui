import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndCotisationComponent } from './end-cotisation.component';

describe('EndCotisationComponent', () => {
  let component: EndCotisationComponent;
  let fixture: ComponentFixture<EndCotisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndCotisationComponent]
    });
    fixture = TestBed.createComponent(EndCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
