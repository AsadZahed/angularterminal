import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalRouteComponent } from './terminal-route.component';

describe('TerminalRouteComponent', () => {
  let component: TerminalRouteComponent;
  let fixture: ComponentFixture<TerminalRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
