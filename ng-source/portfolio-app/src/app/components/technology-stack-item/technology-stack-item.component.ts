import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technology-stack-item',
  templateUrl: './technology-stack-item.component.html',
  styleUrls: ['./technology-stack-item.component.css']
})
export class TechnologyStackItemComponent implements OnInit {

  @Input() stackTitle: string;
  @Input() stackItemsCSV: string;
  @Input() presentationIcon: string;
  StackItems: string[];

  constructor() {
  }

  ngOnInit() {
    this.populateStackItems();
  }

  private populateStackItems() {
    this.StackItems = this.stackItemsCSV.split(',');
  }


}
