import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscarClienteService } from '../services/buscarcliente.service';
import { BuscarPlanosService } from '../services/buscarplanos.service';

import { ContentComponent } from './content.component';
import { AboutComponent } from './about/about.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { RegisterComponent } from './bank-accounts/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { EditarComponent } from './admin/produto/editar/editar.component';
import { IncluirComponent } from './admin/produto/incluir/incluir.component';
import { ExcluirComponent } from './admin/produto/excluir/excluir.component';
import { ListarComponent } from './admin/produto/listar/listar.component';


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
  ],
  providers: [
    BuscarPlanosService,
    BuscarClienteService
  ],
})
export class ContentModule { }
