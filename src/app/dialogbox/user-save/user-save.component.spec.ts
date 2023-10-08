import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSaveComponent } from './user-save.component';

describe('UserSaveComponent', () => {
  let component: UserSaveComponent;
  let fixture: ComponentFixture<UserSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSaveComponent]
    });
    fixture = TestBed.createComponent(UserSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
