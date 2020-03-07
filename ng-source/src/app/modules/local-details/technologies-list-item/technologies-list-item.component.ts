import { Component, OnInit, Input } from '@angular/core';
import { techStack } from 'src/app/entities/techStack';

@Component({
  selector: 'app-technologies-list-item',
  templateUrl: './technologies-list-item.component.html',
  styleUrls: ['./technologies-list-item.component.css']
})
export class TechnologiesListItemComponent implements OnInit {

  @Input() techStackItem : techStack;

  constructor() { }

  ngOnInit(): void {
  }

}
