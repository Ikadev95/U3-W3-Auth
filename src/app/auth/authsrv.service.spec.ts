import { TestBed } from '@angular/core/testing';

import { AuthsrvService } from './authsrv.service';

describe('AuthsrvService', () => {
  let service: AuthsrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthsrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
