import { TestBed } from '@angular/core/testing';

import { PushnotificationsServiceService } from './pushnotifications-service.service';

describe('PushnotificationsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushnotificationsServiceService = TestBed.get(PushnotificationsServiceService);
    expect(service).toBeTruthy();
  });
});
