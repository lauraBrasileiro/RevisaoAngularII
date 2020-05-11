import { TestBed } from '@angular/core/testing';

import { CrudHortifrutiService } from './crud-hortifruti.service';

describe('CrudHortifrutiService', () => {
  let service: CrudHortifrutiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudHortifrutiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
