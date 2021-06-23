import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarClienteService } from 'src/app/services/buscarcliente.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nome: String;
  NomePlano: String;

  constructor(private service: BuscarClienteService, private router: Router) {
  }

  ngOnInit() {
    this.nome = localStorage.getItem('usuarioNome');
    this.NomePlano = localStorage.getItem('usuarioConta');
  }
}

