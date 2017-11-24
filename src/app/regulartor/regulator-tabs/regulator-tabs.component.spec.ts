import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatorTabsComponent } from './regulator-tabs.component';

describe('RegulatorTabsComponent', () => {
  let component: RegulatorTabsComponent;
  let fixture: ComponentFixture<RegulatorTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulatorTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
