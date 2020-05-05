import { TestBed } from '@angular/core/testing';

import { VideoCardService } from './videocard-service.service';

describe('VideoCardServiceService', () => {
  let service: VideoCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
