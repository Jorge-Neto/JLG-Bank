import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BuscarClienteService } from 'src/app/services/buscarcliente.service';
import { Usuario } from 'src/app/content/dados/user';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuario: Usuario[];

  constructor(private service: BuscarClienteService, private router: Router) {
    this.usuario = [];
  }

  ngOnInit(): void {
    this.service.listarUsuarios().then(usuario => {
      this.usuario = usuario;
      // console.log(this.usuario);
    });
  }

  pageEditar(id: number): void{
    this.router.navigate(['admin/editar/' + id]);
  }
  pageExcluir(id): void{
    this.router.navigate(['admin/excluir/' + id]);
  }
}
