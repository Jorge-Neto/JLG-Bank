import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators';

import { Usuario } from '../content/dados/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    usuarioLogado: Usuario = new Usuario();

    URL_AUTH = 'http://localhost:3000/auth/login';
    constructor(private http: HttpClient, private location: Location) {
    }

    login(email: string, senha: string): Observable<Usuario> {
        const logar = { email: email, senha: senha };
        return this.http.post<Usuario>(this.URL_AUTH, logar).pipe(tap(usuario => this.usuarioLogado = usuario));
    }

    logout() {
        try {
            this.usuarioLogado = new Usuario();
            this.location.back();
        } catch (err) {
            console.error(err);
        }
    }

}
