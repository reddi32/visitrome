import { TestBed } from '@angular/core/testing';

import { ContentfulsecondService } from './contentfulsecond.service';

describe('ContentfulsecondService', () => {
  let service: ContentfulsecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentfulsecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
