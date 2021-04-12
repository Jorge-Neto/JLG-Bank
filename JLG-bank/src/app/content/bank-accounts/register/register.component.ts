import { BuscarDadosService } from './../../dados/buscar-dados.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formulario: FormGroup;

  nomePlano: String;

  conta: string = "Plano Black"

  constructor(private busca: BuscarDadosService) { }

  ngOnInit(): void {
    this.formulario = this.busca.retornarForms();

  }

  getForm(){

  }

  limparFormulario() {
  }
}
