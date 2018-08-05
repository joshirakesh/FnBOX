import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerToolbarComponent } from './event-manager-toolbar.component';

describe('EventManagerToolbarComponent', () => {
  let component: EventManagerToolbarComponent;
  let fixture: ComponentFixture<EventManagerToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagerToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
