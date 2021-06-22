import { Router } from '@angular/router';
import { Component, Injectable, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  static emitirClienteCriado = new EventEmitter<string>();

  formLogin: FormGroup;

  constructor(
    private router: Router, private service: AuthService, private fb: FormBuilder
  ) {
    this.formLogin = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control('', [Validators.required])
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    const dadoEmail = this.formLogin.value.email
    const dadoSenha = this.formLogin.value.senha
    LoginComponent.emitirClienteCriado.emit(dadoEmail);

    const token = this.service.login(dadoEmail, dadoSenha);
    console.log(token);

    // if (!token) {
    //   alert("É necessário fornecer dados para login");
    // };
      // this.router.navigate(['/admin']);
  }

  pageRgstr() {
    this.router.navigate(['/bank-accounts']);
  }
}
