import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { translationGuard } from './translation.guard';

describe('translationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => translationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
