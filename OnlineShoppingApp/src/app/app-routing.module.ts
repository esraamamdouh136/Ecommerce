import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'Shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
{ path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
