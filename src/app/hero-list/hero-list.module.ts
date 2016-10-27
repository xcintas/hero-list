import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeroListComponent } from './hero-list.component';
import { HeroListRoutingModule } from './hero-list-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HeroListRoutingModule
  ],
  declarations: [
    HeroListComponent
  ],
})
export class HeroListModule { }
