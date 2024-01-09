import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTontineComponent } from './creat-tontine.component';

describe('CreatTontineComponent', () => {
  let component: CreatTontineComponent;
  let fixture: ComponentFixture<CreatTontineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatTontineComponent]
    });
    fixture = TestBed.createComponent(CreatTontineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
