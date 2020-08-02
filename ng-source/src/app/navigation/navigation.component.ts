import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const inputs = (document.querySelectorAll("#theme-colors a"));
    
    for (let i = 0; i < inputs.length; i++) {
    
      var element = inputs[i] as HTMLElement;
      
      element.style.background = inputs[i].getAttribute("data-bgcolor");
      element.style.border = "1px solid "+inputs[i].getAttribute("data-color");

      inputs[i].addEventListener('click', function() {
        document.documentElement.style
        .setProperty('--main-color', inputs[i].getAttribute("data-bgcolor"));
        document.documentElement.style
        .setProperty('--secondary-color', inputs[i].getAttribute("data-color"));
    
      });


    }

  }

}
