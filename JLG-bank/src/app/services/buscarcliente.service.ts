import { Injectable } from '@angular/core';
import HttpClient from '../../plugins/axios';

import { Usuario } from '../content/dados/user';

@Injectable({
  providedIn: 'root'
})
export class BuscarClienteService extends HttpClient {

  constructor() {
    super('http://localhost:3000/');
  }
  async listarUsuarios(): Promise<Usuario[]> {
    return (await this.instance.get<Usuario[]>('auth'));
  }
  async buscarPorCodigo(codigo: number): Promise<Usuario> {
    return (await this.instance.get<Usuario>('auth/' + codigo));
  }
  async criarUsuario(usuario: Usuario): Promise<Usuario> {
    return (await this.instance.post<Usuario>('auth', usuario));
  }
  async atualizarUsuario(usuario: Usuario): Promise<Usuario> {
    let codigo = usuario.codigo;
    return (await this.instance.put<Usuario>(`auth/${codigo}`, usuario));
  }
  async excluir(codigo: number): Promise<Usuario> {
    return (await this.instance.delete<Usuario>('auth/' + codigo));
  }
}
