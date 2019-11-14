import { Component } from '@angular/core';
import { faCode, faBeer, faHockeyPuck, faGem, faCreditCard, faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faFacebook, faGooglePlus, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeremydrager';
  code = faCode;
  beer = faBeer;
  hockey = faHockeyPuck;
  diamond = faGem;
  money = faCreditCard;
  arrow = faArrowUp;
  bars = faBars;

  twitter = faTwitter;
  github = faGithub;
  facebook = faFacebook;
  linkedin = faLinkedinIn;

  constructor() {
    // $('.parallax').parallax();
  }
}
