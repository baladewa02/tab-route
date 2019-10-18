import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcmPage2Component } from './tcm-page2.component';

describe('TcmPage2Component', () => {
  let component: TcmPage2Component;
  let fixture: ComponentFixture<TcmPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcmPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcmPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
