import { TestBed } from '@angular/core/testing';

import { CommunicateToEditAndDelService } from './communicate-to-edit-and-del.service';

describe('CommunicateToEditAndDelService', () => {
  let service: CommunicateToEditAndDelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicateToEditAndDelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
