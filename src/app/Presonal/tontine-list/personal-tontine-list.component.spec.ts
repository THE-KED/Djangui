import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTontineListComponent } from './personal-tontine-list.component';

describe('TontineListComponent', () => {
  let component: PersonalTontineListComponent;
  let fixture: ComponentFixture<PersonalTontineListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalTontineListComponent]
    });
    fixture = TestBed.createComponent(PersonalTontineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
