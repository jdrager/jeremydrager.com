import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MzParallaxModule, MzSidenavModule, MzNavbarModule, MzButtonModule   } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MzParallaxModule,
    MzButtonModule,
    MzSidenavModule,
    MzNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
