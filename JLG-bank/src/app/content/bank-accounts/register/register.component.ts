import { BuscarPlanosService } from 'src/app/services/buscarplanos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarClienteService } from 'src/app/services/buscarcliente.service';
import { Usuario } from '../../dados/user';
import { Plano } from './../../dados/planos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario;
  plano: Plano;

  constructor(
    private serviceCliente: BuscarClienteService,
    private serviceConta: BuscarPlanosService,
    private router: Router) {
    this.usuario = {} as Usuario;
  }

  ngOnInit(): void {
    localStorage.setItem('usuarioNome', '');
    localStorage.setItem('usuarioConta', '');

  }

  async registrarUsuario(usuario: Usuario){
    this.usuario.privilegio = 'standard';

    if (usuario.renda === 'mais de 4,20k') {
      usuario.accountId = 3;
    } else if (usuario.renda === 'igual a 3k') {
      usuario.accountId = 2;
    } else if (usuario.renda === 'menos de 3k') {
      usuario.accountId = 1;
    } else {
      return alert('Você deve selecionar uma renda!');
    }

    await this.serviceCliente.criarUsuario(usuario).then(() => {
      console.log(`${usuario.nome} criado!`);
    });

    await this.serviceConta.buscarPorCodigo(usuario.accountId).then((plano) => {
      localStorage.setItem('usuarioNome', usuario.nome);
      localStorage.setItem('usuarioConta', plano.titulo);
    });

    this.router.navigate(['/welcome']);
  }
}
