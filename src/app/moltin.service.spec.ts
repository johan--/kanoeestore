import { TestBed, inject } from '@angular/core/testing';

import { MoltinService } from './moltin.service';

describe('MoltinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoltinService]
    });
  });

  it('should be created', inject([MoltinService], (service: MoltinService) => {
    expect(service).toBeTruthy();
  }));
});
