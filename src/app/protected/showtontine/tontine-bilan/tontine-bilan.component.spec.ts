import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineBilanComponent } from './tontine-bilan.component';

describe('TontineDescComponent', () => {
  let component: TontineBilanComponent;
  let fixture: ComponentFixture<TontineBilanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TontineBilanComponent]
    });
    fixture = TestBed.createComponent(TontineBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
