import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { RegisterComponent } from './bank-accounts/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { ListarComponent } from './admin/rotas/listar/listar.component';
import { IncluirComponent } from './admin/rotas/incluir/incluir.component';
import { EditarComponent } from './admin/rotas/editar/editar.component';
import { ExcluirComponent } from './admin/rotas/excluir/excluir.component';

const contentRoutes: Routes = [
  { path: 'bank-accounts', component: BankAccountsComponent },
  { path: 'admin', component: AdminComponent,
    children : [
      { path: 'editar/:id', component: EditarComponent },
      { path: 'excluir/:id', component: ExcluirComponent },
      { path: 'incluir', component: IncluirComponent },
      { path: '', component: ListarComponent }
    ]},
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent },
  { path: '', component: ContentComponent },

];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
