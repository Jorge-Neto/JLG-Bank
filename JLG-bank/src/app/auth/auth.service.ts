import { Injectable } from '@angular/core';
import HttpClient from '../../plugins/axios';

import { Usuario } from '../content/dados/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpClient {

  constructor() {
    super('http://localhost:3000/auth');
  }
  async login(email: string, senha: string): Promise<Usuario> {
    const data = (await this.instance.post<Usuario>('login', { email: email, senha: senha }));
    this.instance.defaults.headers['Authorization'] = `Bearer ${data.token}`;
    localStorage.setItem(`token`, data.token);
    localStorage.setItem(`Privilegio`, data.privilegio);
    localStorage.setItem(`usuarioNome`, data.nome);
    // console.log(data);
    return data;
  }
}
