import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCenterMenu1Component } from './command-center-menu1.component';

describe('CommandCenterMenu1Component', () => {
  let component: CommandCenterMenu1Component;
  let fixture: ComponentFixture<CommandCenterMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCenterMenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCenterMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
