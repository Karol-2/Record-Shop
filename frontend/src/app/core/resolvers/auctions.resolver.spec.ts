import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { auctionsResolver } from './auctions.resolver';

describe('auctionsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => auctionsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
