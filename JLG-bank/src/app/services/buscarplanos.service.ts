import { Injectable } from '@angular/core';
import HttpClient from '../../plugins/axios';
import { Plano } from '../content/dados/planos';

@Injectable({
  providedIn: 'root'
})
export class BuscarPlanosService extends HttpClient {


  constructor() { 
    super("http://localhost:3000/");
  }

  async listar(): Promise<Plano[]> {
    return (await this.instance.get<Plano[]>("planos"))
  }

  async getPlano(id: number): Promise<Plano> {
    return (await this.instance.get<Plano>("planos/" + id))
  }

  async criarPlano(plano: Plano): Promise<Plano> {
    return (await this.instance.post<Plano>("planos", plano))
  }

}
