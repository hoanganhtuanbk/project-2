import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-standards-tabs',
  templateUrl: './standards-tabs.component.html',
  styleUrls: ['./standards-tabs.component.css']
})
export class StandardsTabsComponent implements OnInit {

  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  mySettings: IMultiSelectSettings = {
    buttonClasses: 'btn-select',
    pullRight: true,
    checkedStyle: 'glyphicon'
  };

  ngOnInit() {
    this.myOptions = [
      { id: 1, name: 'Recent' },
      { id: 2, name: 'View' },
    ];
  }
  constructor(
  ) {}
  onChange() {
    console.log(this.optionsModel);
  }

}
