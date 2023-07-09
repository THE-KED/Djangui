import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineListComponent } from './tontine-list.component';

describe('TontineListComponent', () => {
  let component: TontineListComponent;
  let fixture: ComponentFixture<TontineListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TontineListComponent]
    });
    fixture = TestBed.createComponent(TontineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
