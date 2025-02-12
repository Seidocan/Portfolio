import { TestBed } from '@angular/core/testing';

import { MenuFunctionService } from './menu-function.service';

describe('MenuFunctionService', () => {
  let service: MenuFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
