import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCenterMenu2Component } from './command-center-menu2.component';

describe('CommandCenterMenu2Component', () => {
  let component: CommandCenterMenu2Component;
  let fixture: ComponentFixture<CommandCenterMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCenterMenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCenterMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
