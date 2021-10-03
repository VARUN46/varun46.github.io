import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  @Input() profileUrl: string='';
  @Input() fullName: string = '';
  @Input() introduction: string = '';
  @Input() moreCsv = '';
  @Input() visitLink: string | undefined;
  @Input() visitLinkName: string | undefined;

  moreArray: string[] = [];

  ngOnInit(): void {
    this.moreArray = this.moreCsv.split(',').filter(c=>c.length>0 && c!='');
  }


}
