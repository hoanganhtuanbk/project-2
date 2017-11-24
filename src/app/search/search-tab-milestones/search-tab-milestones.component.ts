import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tab-milestones',
  templateUrl: './search-tab-milestones.component.html',
  styleUrls: ['./search-tab-milestones.component.css']
})
export class SearchTabMilestonesComponent implements OnInit {
  isShowResultSearch = true;
  documentsRegulator: any = [{
    icon : 'icon-word'
  },
    {
      icon : 'icon-excel'
    },
    {
      icon : 'icon-excel'
    },
    {
      icon : 'icon-pdf'
    },
    {
      icon : 'icon-word'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
