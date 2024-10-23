import { TestBed } from '@angular/core/testing';

import { PrivGuardGuard } from './priv-guard.guard';

describe('PrivGuardGuard', () => {
  let guard: PrivGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrivGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
