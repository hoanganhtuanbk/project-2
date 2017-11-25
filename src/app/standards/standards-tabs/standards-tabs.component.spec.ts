import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsTabsComponent } from './standards-tabs.component';

describe('StandardsTabsComponent', () => {
  let component: StandardsTabsComponent;
  let fixture: ComponentFixture<StandardsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
