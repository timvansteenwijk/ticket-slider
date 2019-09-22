import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketChoiceComponent } from './ticket-choice.component';

describe('TicketChoiceComponent', () => {
  let component: TicketChoiceComponent;
  let fixture: ComponentFixture<TicketChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
