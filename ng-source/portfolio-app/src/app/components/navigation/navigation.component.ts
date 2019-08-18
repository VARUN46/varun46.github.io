import { Component, OnInit } from '@angular/core';
import { NavigationItem } from './navigationItem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navigationItems: NavigationItem[];
  isNavExpanded: boolean;

  constructor() {
    this.populateNav();
    this.isNavExpanded = false;
  }

  private populateNav() {
    this.navigationItems = [];
    const navItem1: NavigationItem = new NavigationItem();
    navItem1.RouteName = 'Home';
    navItem1.RouteLinkPathName = '#welcome-page';
    this.navigationItems.push(navItem1);
    const navItem3: NavigationItem = new NavigationItem();
    navItem3.RouteName = 'Technology Stack';
    navItem3.RouteLinkPathName = '#technology-stack-items';
    this.navigationItems.push(navItem3);
    const navItem2: NavigationItem = new NavigationItem();
    navItem2.RouteName = 'Portfolio';
    navItem2.RouteLinkPathName = '#home-github-repo-item';
    this.navigationItems.push(navItem2);
  }


  ngOnInit() {
  }


  public toggleNavigationExpander() {

    const selectedBar = document.querySelector('#navigation-expander').querySelectorAll('.bar');
    const navItemsList = document.querySelector('#navitem-list');

    if (this.isNavExpanded) {
      selectedBar.forEach(item => {
        item.classList.remove('open-bar');
      });
      navItemsList.classList.add('hide');
      this.isNavExpanded = false;

    } else {
      selectedBar.forEach(item => {
      item.classList.add('open-bar');
    });
    navItemsList.classList.remove('hide');
    this.isNavExpanded = true;

    }
  }






}
