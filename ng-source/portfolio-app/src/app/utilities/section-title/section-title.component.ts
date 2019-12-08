import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit {

  @Input() title: string;
  @Input() fontIconClasses: string;

  constructor() { }

  ngOnInit() {
  }

}
