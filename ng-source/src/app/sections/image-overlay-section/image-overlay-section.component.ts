import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-overlay-section',
  templateUrl: './image-overlay-section.component.html',
  styleUrls: ['./image-overlay-section.component.css']
})
export class ImageOverlaySectionComponent implements OnInit {

  @Input() imageSrc: string = '';
  @Input() titleText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
