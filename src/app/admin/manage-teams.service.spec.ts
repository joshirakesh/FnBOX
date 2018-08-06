import { TestBed, inject } from '@angular/core/testing';

import { ManageTeamsService } from './manage-teams.service';

describe('ManageTeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageTeamsService]
    });
  });

  it('should be created', inject([ManageTeamsService], (service: ManageTeamsService) => {
    expect(service).toBeTruthy();
  }));
});
