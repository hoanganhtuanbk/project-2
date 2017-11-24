import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatorTabMilestonesComponent } from './regulator-tab-milestones.component';

describe('RegulatorTabMilestonesComponent', () => {
  let component: RegulatorTabMilestonesComponent;
  let fixture: ComponentFixture<RegulatorTabMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulatorTabMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatorTabMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
