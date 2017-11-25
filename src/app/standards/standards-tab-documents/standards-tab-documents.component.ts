import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modals/modal.service';

@Component({
  selector: 'app-standards-tab-documents',
  templateUrl: './standards-tab-documents.component.html',
  styleUrls: ['./standards-tab-documents.component.css']
})
export class StandardsTabDocumentsComponent implements OnInit {

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
