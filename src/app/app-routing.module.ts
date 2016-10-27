import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // Default redirection
  { path: '', redirectTo: '/hero-list', pathMatch: 'full' },

  { path: 'hero-list', loadChildren: './hero-list/hero-list.module#HeroListModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
