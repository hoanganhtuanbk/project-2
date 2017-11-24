import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // get start data dashboard setting
  dashboardSettings: any = [
    {
      name: 'Regulations & Standands',
      icon: 'icon-book-blue',
      isActive: true,
    },
    {
      name: 'Global Regulators',
      icon: 'icon-globe-blue',
      isActive: true,
    },
    {
      name: 'Upcoming Events',
      icon: 'icon-calendar-blue',
      isActive: true,
    },
    {
      name: 'Bookmarked Items',
      icon: 'icon-save-blue',
      isActive: true,
    },
    {
      name: 'Saved Searches',
      icon: 'icon-search-box-new',
      isActive: false,
    },
    {
      name: 'Recently Viewed Items',
      icon: 'icon-page-setting',
      isActive: false,
    },

  ]
  // get start data notification setting
  notificationSettings: any = [
    {
      name: 'Website Notications',
      icon: 'icon-bell',
      isActive: true,
    },
    {
      name: 'Message Notifications',
      icon: 'icon-chat',
      isActive: true,
    },


  ]
  constructor() { }

  ngOnInit() {
  }

}
