import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modals/modal.service';

@Component({
  selector: 'app-standards-tab-milestones',
  templateUrl: './standards-tab-milestones.component.html',
  styleUrls: ['./standards-tab-milestones.component.css']
})
export class StandardsTabMilestonesComponent implements OnInit {

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
