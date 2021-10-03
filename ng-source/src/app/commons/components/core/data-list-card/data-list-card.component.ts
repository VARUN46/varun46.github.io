import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list-card',
  templateUrl: './data-list-card.component.html',
  styleUrls: ['./data-list-card.component.css']
})
export class DataListCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() listItemsCsv: string = '';
  listItemsArray: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listItemsArray = this.listItemsCsv.split(',').filter(c=>c.length>0 && c!='');
  }

}
