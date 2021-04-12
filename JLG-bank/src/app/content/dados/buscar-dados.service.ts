import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from './user';
import { Plano } from './planos';


@Injectable({
  providedIn: 'root'
})
export class BuscarDadosService {

  registro = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    renda: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, [Validators.required]),
  });

  urlPlanos = "http://localhost:3000/planos";
  urlUsuarios = "http://localhost:3000/usuarios";

  constructor(private http: HttpClient) { }

// RetornarPlanos
  retornarPlanos(): Observable<Plano[]> {
    return this.http.get<Plano[]>(this.urlPlanos);
  }


// Usuarios
  resgistrarUsuario(usuario: Usuario): Observable<Usuario[]> {
    return this.http.post<Usuario[]>(this.urlUsuarios, usuario);
  }

  retornarForms() {
    return this.registro;
  }
}
