import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() iconClass: string;
  @Input() pageTitle: string;
  @Input() pageDescription: string;

  constructor() { 
    this.pageDescription='';
  }

  ngOnInit(): void {
  }

}
