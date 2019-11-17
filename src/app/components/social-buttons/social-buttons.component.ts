import { Component } from '@angular/core';
import { faTwitter, faGithub, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent  {

  twitter = faTwitter;
  github = faGithub;
  facebook = faFacebook;
  linkedin = faLinkedinIn;
  instagram = faInstagram;

}
