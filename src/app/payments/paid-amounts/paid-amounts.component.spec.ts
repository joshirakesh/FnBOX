import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidAmountsComponent } from './paid-amounts.component';

describe('PaidAmountsComponent', () => {
  let component: PaidAmountsComponent;
  let fixture: ComponentFixture<PaidAmountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidAmountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidAmountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
