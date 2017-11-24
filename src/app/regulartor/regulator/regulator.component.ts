import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regulator',
  templateUrl: './regulator.component.html',
  styleUrls: ['./regulator.component.css']
})
export class RegulatorComponent implements OnInit {
  dataCountries: any = [{
    name: '',
    icon: 'icon-EBA'
  },
{
  name: '',
  icon: 'icon-IASB'
},
{
  name: 'Australia',
  icon: 'icon-APRA'
},
{
  name: 'Hong kong',
  icon: 'icon-SFC'
},
{
  name: 'Singapore',
  icon: 'icon-MAS'
},
{
  name: 'South Korea',
  icon: 'icon-BOK'
},
{
  name: 'Switzerland',
  icon: 'icon-FINMA'
},
{
  name: 'United Kingdom',
  icon: 'icon-PRA'
},
{
  name: 'United States',
  icon: 'icon-FASB'
},
{
  name: '',
  icon: 'icon-FED'
}
];
  constructor() { }

  ngOnInit() {
  }

}
