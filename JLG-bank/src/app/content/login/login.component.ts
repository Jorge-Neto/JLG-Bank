import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from './../../auth/auth.service';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private router: Router, private service: AuthService, private fb: FormBuilder
  ) {
    this.formLogin = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control('', [Validators.required])
    });

  }

  erroLogin: boolean;

  ngOnInit(): void {
    localStorage.setItem(`Privilegio`, '');
    this.erroLogin = false;
  }

  onSubmit() {
    const dadoEmail = this.formLogin.value.email;
    const dadoSenha = this.formLogin.value.senha;
    if (dadoEmail == null || dadoSenha == null) {
      return this.erroLogin = true;
    }

    this.service.login(dadoEmail, dadoSenha);
    const permissao = localStorage.getItem(`Privilegio`);

    if (permissao === 'adm') {
      return this.router.navigate(['/admin']);
    } else if (permissao === 'standard') {
      return this.router.navigate(['/welcome']);
    } else {
      return this.erroLogin = true;
    }
  }

  closeAlert() {
    this.erroLogin = false;
  }

  pageRgstr() {
    this.router.navigate(['/bank-accounts']);
  }
}
