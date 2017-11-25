import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsTabMilestonesComponent } from './standards-tab-milestones.component';

describe('StandardsTabMilestonesComponent', () => {
  let component: StandardsTabMilestonesComponent;
  let fixture: ComponentFixture<StandardsTabMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsTabMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsTabMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
