import { TestBed } from '@angular/core/testing';

import { ComparsaService } from './comparsa.service';

describe('ComparsaService', () => {
  let service: ComparsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
