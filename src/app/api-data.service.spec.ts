import { TestBed } from '@angular/core/testing';

import { APIDataService } from './api-data.service';

describe('APIDataService', () => {
  let service: APIDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
