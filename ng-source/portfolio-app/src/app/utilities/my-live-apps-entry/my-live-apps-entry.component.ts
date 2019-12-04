import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-live-apps-entry',
  templateUrl: './my-live-apps-entry.component.html',
  styleUrls: ['./my-live-apps-entry.component.css']
})
export class MyLiveAppsEntryComponent implements OnInit {

  @Input() appName: string;
  @Input() description: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
