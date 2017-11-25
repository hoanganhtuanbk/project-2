import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css']
})
export class StandardsComponent implements OnInit {
  dataStandards: any = [{
    title: 'APRA',
    items: [
      {
        name: 'ARF 730'
      },
      {
        name: 'ARF 731'
      },
      {
        name: 'EFS Modernaization'
      },
      {
        name: 'HK FRR'
      },
      {
        name: 'MAS 620 Rewamp'
      }

    ]
  },
    {
      title: 'BCBS',
      items: [
        {
          name: 'Base iv Capital Floor'
        },
        {
          name: 'Base iv Secularization'
        },
        {
          name: 'Base iv Std Credit Risk'
        },
        {
          name: 'LER'
        },
        {
          name: 'SACCR'
        },{
          name: 'TLACC'
        }

      ]
    },
    {
      title: 'FASB/IASB',
      items: [
        {
          name: 'IFRS 9 Classification & Measurement'
        },
        {
          name: 'IFRS Impaunment'
        },
        {
          name: 'Leases'
        },
        {
          name: 'Revenue Recognition'
        }


      ]
    },
    {
      title: 'FED',
      items: [
        {
          name: 'CCAR'
        }
      ]
    }]
  constructor() { }

  ngOnInit() {
  }

}
