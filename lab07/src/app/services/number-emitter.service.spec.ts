import { TestBed } from '@angular/core/testing';

import { NumberEmitterService } from './number-emitter.service';

describe('NumberEmitterService', () => {
  let service: NumberEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
