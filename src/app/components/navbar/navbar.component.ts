import { Component } from '@angular/core';
import { faCode, faBeer, faHockeyPuck, faGem, faCreditCard, faBars, faIdBadge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  code = faCode;
  beer = faBeer;
  hockey = faHockeyPuck;
  diamond = faGem;
  money = faCreditCard;
  bars = faBars;
  life = faIdBadge;
}
