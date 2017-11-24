import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modals/modal.service';

@Component({
  selector: 'app-regulator-tab-documents',
  templateUrl: './regulator-tab-documents.component.html',
  styleUrls: ['./regulator-tab-documents.component.css']
})
export class RegulatorTabDocumentsComponent implements OnInit {
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
  modalId = 'detailDocument';

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit() {
  }

}
