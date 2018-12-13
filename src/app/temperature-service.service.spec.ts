import { TestBed } from '@angular/core/testing';

import { TemperatureServiceService } from './temperature-service.service';

describe('TemperatureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperatureServiceService = TestBed.get(TemperatureServiceService);
    expect(service).toBeTruthy();
  });
});
