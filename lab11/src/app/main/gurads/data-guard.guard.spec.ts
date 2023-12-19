import { TestBed } from '@angular/core/testing';

import { DataGuardGuard } from './data-guard.guard';

describe('DataGuardGuard', () => {
  let guard: DataGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DataGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
