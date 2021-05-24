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
    return (await this.instance.get<Usuario[]>('users'));
  }

  async buscarPorId(id: number): Promise<Usuario> {
    return (await this.instance.get<Usuario>('users/' + id));
  }

  async criarUsuario(usuario: Usuario): Promise<Usuario> {
    return (await this.instance.post<Usuario>('users', usuario));
  }

  async atualizarUsuario(usuario: Usuario): Promise<Usuario> {
    let id = usuario.id;
    return (await this.instance.put<Usuario>(`users/${id}`, usuario));
  }

  async excluir(id: number): Promise<Usuario> {
    return (await this.instance.delete<Usuario>('/users/:' + id));
  }


}
