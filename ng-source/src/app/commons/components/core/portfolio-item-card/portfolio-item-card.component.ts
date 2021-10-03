import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item-card',
  templateUrl: './portfolio-item-card.component.html',
  styleUrls: ['./portfolio-item-card.component.css']
})
export class PortfolioItemCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
