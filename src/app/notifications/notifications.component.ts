import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  dataNotifications: any = [{
    icon: 'icon-mail-md',
    isDot: true,
    time: '2 min ago'
  },
  {
    icon: 'icon-paper',
    isDot: true,
    time: 'Yesterday'

  },
  {
    icon: 'icon-list',
    time: 'Yesterday'

  },
  {
    icon: 'icon-reload',
    time: '08/04'

  },
  {
    icon: 'icon-reload',
    time: '08/04'

  },
  {
    icon: 'icon-mail-md',
    time: '07/31'

  },
  {
    icon: 'icon-list',
    time: '07/30'

  },
  {
    icon: 'icon-mail-md',
    time: '07/29'

  },
  ]
  constructor() { }

  ngOnInit() {
  }

}
