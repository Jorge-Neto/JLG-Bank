import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuscarClienteService } from 'src/app/services/buscarcliente.service';
import { Usuario } from 'src/app/content/dados/user';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  usuario: Usuario;

  constructor(private service: BuscarClienteService,
    private router: Router, private route: ActivatedRoute) {
    this.usuario = {} as Usuario;
  }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorCodigo(Number(str)).then(usuario => {
      this.usuario = usuario;
    });
  }

  excluir(usuario: Usuario) {
    this.service.excluir(usuario.codigo).then(() => {
      this.router.navigate(['/admin']);
    });
  }


}