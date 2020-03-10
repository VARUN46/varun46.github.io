import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-launcher-item',
  templateUrl: './app-launcher-item.component.html',
  styleUrls: ['./app-launcher-item.component.css']
})
export class AppLauncherItemComponent implements OnInit {

  @Input() appName: string;
  @Input() routerLink: string;
  @Input() appIconClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
