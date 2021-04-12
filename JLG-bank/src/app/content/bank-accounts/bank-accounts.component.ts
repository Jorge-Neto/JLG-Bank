import { BuscarDadosService } from './../dados/buscar-dados.service';
import { Plano } from './../dados/planos';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {

  // @Input() plano: Plano;
  // @Output() eventoDeClique: EventEmitter<> = new EventEmitter;
  plano = [];

  constructor(
    private router: Router,
    private service: BuscarDadosService
  ) { }

  ngOnInit(): void {
    this.service.retornarPlanos().subscribe ( planos =>
      this.plano = planos )
  }

  irRegistrar(nomePlano: Plano) {
    
    // this.eventoDeClique.emit(nomePlano.titulo)
    this.router.navigate(['/register']);
    
  }
}
