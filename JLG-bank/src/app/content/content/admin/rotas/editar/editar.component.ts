import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuscarClienteService } from 'src/app/services/buscarcliente.service';
import { Usuario } from 'src/app/content/dados/user';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario : Usuario;

  constructor(private service : BuscarClienteService,
      private router: Router, private route : ActivatedRoute) { 
    this.usuario = {} as Usuario;
  }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(str)).then( usuario => {
      this.usuario = usuario;
    });
  }

  atualizar(usuario : Usuario) {
    this.service.atualizarUsuario(usuario).then(() => {
      this.router.navigate(['/admin']);
    });
  }
}
