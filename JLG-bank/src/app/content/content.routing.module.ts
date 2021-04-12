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

const contentRoutes: Routes = [
  { path: 'bank-accounts', component: BankAccountsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
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
