import { TestBed } from '@angular/core/testing';

import { ListimageService } from './listimage.service';

describe('ListimageService', () => {
  let service: ListimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
