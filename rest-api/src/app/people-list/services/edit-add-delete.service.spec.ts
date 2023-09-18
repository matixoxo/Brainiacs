import { TestBed } from '@angular/core/testing';

import { EditModalServiceService } from './edit-add-delete.service';

describe('EditModalServiceService', () => {
  let service: EditModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
