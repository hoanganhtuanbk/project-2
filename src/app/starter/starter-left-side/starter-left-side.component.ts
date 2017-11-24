import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter-left-side',
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.css']
})
export class StarterLeftSideComponent implements OnInit {
  menus: any = [{
    name: 'NAVIGATION',
    icon: 'icon-sidebar icon-navigation icon-title',
    sref: '/home',
    hasController: true
  },
    {
    name: 'Dashboard',
    icon: 'icon-sidebar icon-dashboard',
    sref: '/dashboard'
  },
    {
    name: 'Search',
    icon: 'icon-sidebar icon-search',
    sref: '/search'
  },
    {
    name: 'Regulators',
    icon: 'icon-sidebar icon-regulators',
    sref: '/regulator'
  },
    {
    name: 'Regulators & Standards',
    icon: 'icon-sidebar icon-regulators-standards',
    sref: '/standards'

  },
    {
    name: 'Community',
    icon: 'icon-sidebar icon-community',
    sref: '/community'

  },
    {
    name: 'FAQs & Help',
    icon: 'icon-sidebar icon-faqs-help',
    sref: '/help'

  },
    {
    name: 'Notifications',
    icon: 'icon-sidebar icon-notifications',
    sref: '/notifications'

  },
    {
    name: 'Admin',
    icon: 'icon-sidebar icon-admin',
    sref: '/profile'

  }
  ];

  constructor() { }

  ngOnInit() {
  }
  toggleSideBar(): void {
    const element = document.getElementById('sidebar-custom');
    element.classList.toggle('collapse-left');
  }
}
