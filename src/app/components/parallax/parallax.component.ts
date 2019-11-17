import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css'],
  inputs: ['image']
})
export class ParallaxComponent  {
  image: string|null = "hi";
}
