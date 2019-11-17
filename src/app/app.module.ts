import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MzParallaxModule, MzSidenavModule, MzNavbarModule, MzButtonModule   } from 'ngx-materialize';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { HeroComponent } from './components/hero/hero.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { ReturnToTopArrowComponent } from './components/return-to-top-arrow/return-to-top-arrow.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialButtonsComponent,
    HeroComponent,
    ParallaxComponent,
    ReturnToTopArrowComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
