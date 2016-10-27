import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HeroListModule } from './hero-list/hero-list.module';

@NgModule({
  imports: [
    /*Angular modules */
    BrowserModule,

    /*Feature modules */
    CoreModule,
    HeroListModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
