import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatorTabDocumentsComponent } from './regulator-tab-documents.component';

describe('RegulatorTabDocumentsComponent', () => {
  let component: RegulatorTabDocumentsComponent;
  let fixture: ComponentFixture<RegulatorTabDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulatorTabDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatorTabDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
