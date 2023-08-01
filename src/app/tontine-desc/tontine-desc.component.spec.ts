import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineDescComponent } from './tontine-desc.component';

describe('TontineDescComponent', () => {
  let component: TontineDescComponent;
  let fixture: ComponentFixture<TontineDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TontineDescComponent]
    });
    fixture = TestBed.createComponent(TontineDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
