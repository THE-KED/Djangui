import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEchecCmpComponent } from './buy-echec-cmp.component';

describe('BuyEchecCmpComponent', () => {
  let component: BuyEchecCmpComponent;
  let fixture: ComponentFixture<BuyEchecCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyEchecCmpComponent]
    });
    fixture = TestBed.createComponent(BuyEchecCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
