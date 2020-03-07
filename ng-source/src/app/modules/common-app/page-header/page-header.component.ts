import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() iconClass: string;
  @Input() pageTitle: string;
  @Input() pageDescription: string;

  constructor(private router: Router) { 
    this.pageDescription='';
  }

  ngOnInit(): void {
  }

  homeClickHandler(){
    this.router.navigate(['/']);
  }

}
