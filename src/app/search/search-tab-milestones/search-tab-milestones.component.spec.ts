import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTabMilestonesComponent } from './search-tab-milestones.component';

describe('SearchTabMilestonesComponent', () => {
  let component: SearchTabMilestonesComponent;
  let fixture: ComponentFixture<SearchTabMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTabMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTabMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
