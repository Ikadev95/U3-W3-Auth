import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivGuardGuard } from './guards/priv-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./pages/home/home.module').then (m =>m.HomeModule)
  },
  {
    path: 'private',
    loadChildren:() => import('./pages/private/private.module').then (m =>m.PrivateModule),
    canActivate: [PrivGuardGuard]
  },
  {
    path: 'shop',
    loadChildren:() => import('./pages/shop/shop.module').then (m =>m.ShopModule)
  },
  { path: 'auth',
     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
