import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modals/modal.service';
@Component({
  selector: 'app-search-tabs',
  templateUrl: './search-tabs.component.html',
  styleUrls: ['./search-tabs.component.css']
})
export class SearchTabsComponent implements OnInit {
  modalId = 'searchModal';

  ngOnInit() {
  }
  constructor(
    public modalService: ModalService
  ) {}
}
