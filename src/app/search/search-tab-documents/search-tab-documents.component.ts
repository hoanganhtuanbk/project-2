import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tab-documents',
  templateUrl: './search-tab-documents.component.html',
  styleUrls: ['./search-tab-documents.component.css']
})
export class SearchTabDocumentsComponent implements OnInit {
  documentsSearch: any = [{
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
