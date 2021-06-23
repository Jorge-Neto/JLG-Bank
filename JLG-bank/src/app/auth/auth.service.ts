import { Injectable } from '@angular/core';
import HttpClient from '../../plugins/axios';
import { map, catchError} from 'rxjs/operators';

import { Usuario } from '../content/dados/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpClient {

  constructor() {
    super('http://localhost:3000/auth');
  }
  async login(email: string, senha: string): Promise<Usuario> {
    const logar = { email: email, senha: senha };
    const data = (await this.instance.post<Usuario>('login', logar))
    this.instance.defaults.headers["Authorization"] = `Bearer ${data.token}`
    localStorage.setItem(`token`, data.token)
    console.log(data)
    return data;
  }
 
}