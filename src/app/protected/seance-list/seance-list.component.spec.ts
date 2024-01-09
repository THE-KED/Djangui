import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceListComponent } from './seance-list.component';

describe('SeanceListComponent', () => {
  let component: SeanceListComponent;
  let fixture: ComponentFixture<SeanceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeanceListComponent]
    });
    fixture = TestBed.createComponent(SeanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
