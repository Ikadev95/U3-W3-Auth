import { TestBed } from '@angular/core/testing';

import { ProductSvcService } from './product-svc.service';

describe('ProductSvcService', () => {
  let service: ProductSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
