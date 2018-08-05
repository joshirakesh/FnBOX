import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerSidenavComponent } from './event-manager-sidenav.component';

describe('EventManagerSidenavComponent', () => {
  let component: EventManagerSidenavComponent;
  let fixture: ComponentFixture<EventManagerSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagerSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
