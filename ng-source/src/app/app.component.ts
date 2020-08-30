import { Component, OnInit } from '@angular/core';
import { AppScopeService } from './services/app-scope.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   *
   */
  
  constructor(public appSvc:AppScopeService) {
    
  }
  ngOnInit(): void {
  }


}
