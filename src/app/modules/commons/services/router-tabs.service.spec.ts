import { TestBed } from '@angular/core/testing';

import { RouterTabsService } from './router-tabs.service';

describe('RouterTabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterTabsService = TestBed.get(RouterTabsService);
    expect(service).toBeTruthy();
  });
});
