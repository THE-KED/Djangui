import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineDetailComponent } from './tontine-detail.component';

describe('TontineDetailComponent', () => {
  let component: TontineDetailComponent;
  let fixture: ComponentFixture<TontineDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TontineDetailComponent]
    });
    fixture = TestBed.createComponent(TontineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
