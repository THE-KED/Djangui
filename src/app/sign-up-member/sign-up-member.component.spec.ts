import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpMemberComponent } from './sign-up-member.component';

describe('SignUpMemberComponent', () => {
  let component: SignUpMemberComponent;
  let fixture: ComponentFixture<SignUpMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpMemberComponent]
    });
    fixture = TestBed.createComponent(SignUpMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
