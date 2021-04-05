// import { HelpComponent } from './content/help/help.component';
// import { ContactComponent } from './content/contact/contact.component';
// import { AboutComponent } from './content/about/about.component';
// import { BankAccountsComponent } from './content/bank-accounts/bank-accounts.component';
// import { LoginComponent } from './content/login/login.component';
// import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'content', loadChildren: () => import('./content/content.module').then(mod => mod.ContentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
