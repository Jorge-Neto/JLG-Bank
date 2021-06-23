import { Injectable } from '@angular/core';
import HttpClient from '../../plugins/axios';
import { Plano } from '../content/dados/planos';

@Injectable({
  providedIn: 'root'
})
export class BuscarPlanosService extends HttpClient {

  constructor() {
    super('http://localhost:3000');
  }
  async listar(): Promise<Plano[]> {
    return (await this.instance.get<Plano[]>('/accounts/'));
  }

  async buscarPorCodigo(codigo: number): Promise<Plano> {
    return (await this.instance.get<Plano>('users/' + codigo));
  }
}
