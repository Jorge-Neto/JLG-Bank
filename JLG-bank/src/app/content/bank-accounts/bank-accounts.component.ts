import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarPlanosService } from './../buscarplanos.service';
import { Plano } from '../dados/planos';
//import { Input, Output, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {

  // @Input() plano: Plano;
  // @Output() eventoDeClique: EventEmitter<> = new EventEmitter;
  planos: Plano[];

  constructor(private service: BuscarPlanosService, private router: Router) {
    this.planos = [];
  }

  async ngOnInit(): Promise<void> {
    this.planos = await this.service.listar()
    console.log(this.planos);
  }

  irRegistrar(nome) {
    
    this.router.navigate(['/register']);
  }
}
