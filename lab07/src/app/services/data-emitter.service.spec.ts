import { TestBed } from '@angular/core/testing';

import { DataEmitterService } from './data-emitter.service';

describe('DataEmitterService', () => {
  let service: DataEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
