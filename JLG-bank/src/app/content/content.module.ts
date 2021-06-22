import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscarClienteService } from '../services/buscarcliente.service';
import { BuscarPlanosService } from '../services/buscarplanos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ContentComponent } from './content.component';
import { AboutComponent } from './about/about.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { RegisterComponent } from './bank-accounts/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { EditarComponent } from './admin/rotas/editar/editar.component';
import { IncluirComponent } from './admin/rotas/incluir/incluir.component';
import { ExcluirComponent } from './admin/rotas/excluir/excluir.component';
import { ListarComponent } from './admin/rotas/listar/listar.component';


@NgModule({
  declarations: [
    ContentComponent,
    AboutComponent,
    BankAccountsComponent,
    RegisterComponent,
    ContactComponent,
    HelpComponent,
    LoginComponent,
    WelcomeComponent,
    AdminComponent,
    EditarComponent,
    IncluirComponent,
    ExcluirComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BuscarPlanosService,
    BuscarClienteService
  ],
})
export class ContentModule { }
