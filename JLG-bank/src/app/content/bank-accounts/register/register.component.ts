import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BuscarClienteService } from 'src/app/services/buscarcliente.service';
import { Usuario } from '../../dados/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // formulario: FormGroup;
  // nomePlano = '';
  // conta: string;
  usuario: Usuario;

  constructor(private service: BuscarClienteService,
    private router: Router) {
    this.usuario = {} as Usuario;
  }

  ngOnInit(): void {
    // this.formulario = this.busca.retornarForms();
  }

  registrarUsuario(usuario: Usuario) {
    this.usuario.privilegio = "standard";
    this.service.criarUsuario(usuario).then(() => {
      console.log(`${usuario.nome} criado!`);
      this.router.navigate(['/admin']);
    })
  }

}
