import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTabDocumentsComponent } from './search-tab-documents.component';

describe('SearchTabDocumentsComponent', () => {
  let component: SearchTabDocumentsComponent;
  let fixture: ComponentFixture<SearchTabDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTabDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTabDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
