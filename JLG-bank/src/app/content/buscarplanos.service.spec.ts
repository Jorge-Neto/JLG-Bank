import { TestBed } from '@angular/core/testing';

import { BuscarPlanosService } from './buscar-planos.service';

describe('BuscarPlanosService', () => {
  let service: BuscarPlanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarPlanosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
