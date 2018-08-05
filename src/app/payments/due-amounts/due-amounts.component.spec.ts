import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueAmountsComponent } from './due-amounts.component';

describe('DueAmountsComponent', () => {
  let component: DueAmountsComponent;
  let fixture: ComponentFixture<DueAmountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueAmountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueAmountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
