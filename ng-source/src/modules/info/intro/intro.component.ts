import { Component, OnInit } from '@angular/core';
import { NAME } from '../../../environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  name: string = '';
  constructor() {
    
   }
 

  ngOnInit(): void {
    this.name = NAME;
    
  }

}
