import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTontineComponent } from './profil-tontine.component';

describe('ProfilTontineComponent', () => {
  let component: ProfilTontineComponent;
  let fixture: ComponentFixture<ProfilTontineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilTontineComponent]
    });
    fixture = TestBed.createComponent(ProfilTontineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
