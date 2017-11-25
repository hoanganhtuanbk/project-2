import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsTabContactsComponent } from './standards-tab-contacts.component';

describe('StandardsTabContactsComponent', () => {
  let component: StandardsTabContactsComponent;
  let fixture: ComponentFixture<StandardsTabContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsTabContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsTabContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
