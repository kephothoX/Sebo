import { TestBed } from '@angular/core/testing';

import { SeboService } from './sebo.service';

describe('SeboService', () => {
  let service: SeboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
