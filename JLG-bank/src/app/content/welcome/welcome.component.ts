import { BuscarClienteService } from 'src/app/services/buscarcliente.service';
import { Usuario } from 'src/app/content/dados/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  usuario: Usuario;

  constructor(private service: BuscarClienteService, private router: Router, private route: ActivatedRoute) {
    this.usuario = {} as Usuario;
  }

  ngOnInit() {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorCodigo(Number(str)).then(usuario => {
      this.usuario = usuario;
    });
  }

}