import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerDashboardComponent } from './event-manager-dashboard.component';

describe('EventManagerDashboardComponent', () => {
  let component: EventManagerDashboardComponent;
  let fixture: ComponentFixture<EventManagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
