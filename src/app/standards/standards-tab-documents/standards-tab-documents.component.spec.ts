import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsTabDocumentsComponent } from './standards-tab-documents.component';

describe('StandardsTabDocumentsComponent', () => {
  let component: StandardsTabDocumentsComponent;
  let fixture: ComponentFixture<StandardsTabDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsTabDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsTabDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
