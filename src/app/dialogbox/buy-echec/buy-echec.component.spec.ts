import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEchecComponent } from './buy-echec.component';

describe('BuyEchecComponent', () => {
  let component: BuyEchecComponent;
  let fixture: ComponentFixture<BuyEchecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyEchecComponent]
    });
    fixture = TestBed.createComponent(BuyEchecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
