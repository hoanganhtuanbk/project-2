import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {
  isShowDropdown= false;
  constructor() { }

  ngOnInit() {
  }
  toggleShowDropdown(): void {
    this.isShowDropdown = !this.isShowDropdown;
  }
}
