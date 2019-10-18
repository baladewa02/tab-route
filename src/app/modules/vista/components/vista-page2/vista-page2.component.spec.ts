import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPage2Component } from './vista-page2.component';

describe('VistaPage2Component', () => {
  let component: VistaPage2Component;
  let fixture: ComponentFixture<VistaPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
