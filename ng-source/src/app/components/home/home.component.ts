import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap, Back, Power1 } from 'gsap'
import {    } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    let timeline = gsap.timeline();
    timeline.to(".content .fsd", {rotation: 0, y: 100, duration: 1,opacity:1})
    .to(".content .cc", {rotation: 0, y: 150, duration: 3,opacity:1})
    .to(".content .f", {rotation: 0, y: 200, duration: 5,opacity:1});
    gsap.to(".portfolio-img-wrapper img",{ x:100, duration:10,opacity:0.5 });
    gsap.to(".connect-links", { duration:12, opacity:1 });
  }

  ngOnInit(): void {
  }

}
