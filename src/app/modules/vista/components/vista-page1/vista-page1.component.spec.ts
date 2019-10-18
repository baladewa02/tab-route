import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPage1Component } from './vista-page1.component';

describe('VistaPage1Component', () => {
  let component: VistaPage1Component;
  let fixture: ComponentFixture<VistaPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
