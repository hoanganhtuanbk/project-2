import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modals/modal.service';

@Component({
  selector: 'app-regulator-tab-milestones',
  templateUrl: './regulator-tab-milestones.component.html',
  styleUrls: ['./regulator-tab-milestones.component.css']
})
export class RegulatorTabMilestonesComponent implements OnInit {
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
  modalId = 'detailRegulator';

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit() {
  }

}
