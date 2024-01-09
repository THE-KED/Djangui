import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineBilanListComponent } from './tontine-bilan-list.component';

describe('ShowtontineComponent', () => {
  let component: TontineBilanListComponent;
  let fixture: ComponentFixture<TontineBilanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TontineBilanListComponent]
    });
    fixture = TestBed.createComponent(TontineBilanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
