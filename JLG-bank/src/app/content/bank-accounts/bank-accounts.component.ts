import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarPlanosService } from 'src/app/services/buscarplanos.service';
import { Plano } from '../dados/planos';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {

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
