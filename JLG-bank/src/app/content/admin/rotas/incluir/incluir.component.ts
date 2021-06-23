import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarClienteService } from 'src/app/services/buscarcliente.service';
import { Usuario } from 'src/app/content/dados/user';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  ngOnInit(): void {
  }

  usuario: Usuario;

  constructor(private service: BuscarClienteService, private router: Router) {
    this.usuario = {} as Usuario;
  }

  salvar(usuario: Usuario) {
    this.service.criarUsuario(usuario).then(() => {
      console.log('Usuario Criado');
      this.router.navigate(['/admin']);
    });
  }

}
