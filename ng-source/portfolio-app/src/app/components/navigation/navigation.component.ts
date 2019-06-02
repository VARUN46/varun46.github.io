import { Component, OnInit } from '@angular/core';
import { NavigationItem } from './navigationItem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private navigationItems: NavigationItem[];

  constructor() {
    this.populateNav();
  }

  private populateNav() {
    this.navigationItems = [];
    const navItem1: NavigationItem = new NavigationItem();
    navItem1.RouteName = 'Home';
    navItem1.RouteLinkPathName = '';
    this.navigationItems.push(navItem1);
    const navItem2: NavigationItem = new NavigationItem();
    navItem2.RouteName = 'Portfolio';
    navItem2.RouteLinkPathName = 'portfolio';
    this.navigationItems.push(navItem2);
    const navItem3: NavigationItem = new NavigationItem();
    navItem3.RouteName = 'About this website';
    navItem3.RouteLinkPathName = 'aboutwebsite';
    this.navigationItems.push(navItem3);
  }

  ngOnInit() {
  }

}
