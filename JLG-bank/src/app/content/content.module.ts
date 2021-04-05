import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import { AboutComponent } from './about/about.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { RegisterComponent } from './bank-accounts/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ContentComponent,
    AboutComponent,
    BankAccountsComponent,
    RegisterComponent,
    ContactComponent,
    HelpComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ContentModule { }
