import { Component } from '@angular/core';
import { faCode, faBeer, faHockeyPuck, faGem, faCreditCard, faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jeremy Drager';
  code = faCode;
  beer = faBeer;
  hockey = faHockeyPuck;
  diamond = faGem;
  money = faCreditCard;
  bars = faBars;
}
