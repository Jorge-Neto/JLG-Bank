import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  nomePlano = '';

  conta: string;

  ngOnInit(): void {
    // this.formulario = this.busca.retornarForms();
  }

}
