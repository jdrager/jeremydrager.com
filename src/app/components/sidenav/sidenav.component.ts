import { Component } from '@angular/core';
import { faCode, faBeer, faHockeyPuck, faGem, faCreditCard, faBars, faIdBadge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {
  code = faCode;
  beer = faBeer;
  hockey = faHockeyPuck;
  diamond = faGem;
  money = faCreditCard;
  bars = faBars;
  life = faIdBadge;
}
