import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tabPresent = true;
  isHideLeftSearch = false;
  constructor() { }

  ngOnInit() {
  }

  toggleLeftSearch = () => {
    const element = document.getElementById('custom-left-search');
    element.classList.toggle('collapse-left-search');
    this.isHideLeftSearch = !this.isHideLeftSearch;
  }
  handleTabsLeftSearch = () => {
    this.tabPresent = !this.tabPresent;
  }
}
