import { TestBed } from '@angular/core/testing';

import { ApiExploreService } from './api-explore.service';

describe('ApiExploreService', () => {
  let service: ApiExploreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExploreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
