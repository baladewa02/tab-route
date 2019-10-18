import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcmPage1Component } from './tcm-page1.component';

describe('TcmPage1Component', () => {
  let component: TcmPage1Component;
  let fixture: ComponentFixture<TcmPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcmPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcmPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
