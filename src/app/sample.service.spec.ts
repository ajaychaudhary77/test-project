import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleService = TestBed.get(SampleService);
    expect(service).toBeTruthy();
  });
});
