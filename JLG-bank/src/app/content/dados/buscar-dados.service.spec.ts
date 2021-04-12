import { TestBed } from '@angular/core/testing';

import { BuscarDadosService } from './buscar-dados.service';

describe('BuscarDadosService', () => {
  let service: BuscarDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
