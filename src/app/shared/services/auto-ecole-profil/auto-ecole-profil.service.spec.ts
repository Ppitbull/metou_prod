import { TestBed } from '@angular/core/testing';

import { AutoEcoleProfilService } from './auto-ecole-profil.service';

describe('AutoEcoleProfilService', () => {
  let service: AutoEcoleProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoEcoleProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
