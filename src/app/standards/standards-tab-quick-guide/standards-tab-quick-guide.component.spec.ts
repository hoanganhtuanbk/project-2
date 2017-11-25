import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsTabQuickGuideComponent } from './standards-tab-quick-guide.component';

describe('StandardsTabQuickGuideComponent', () => {
  let component: StandardsTabQuickGuideComponent;
  let fixture: ComponentFixture<StandardsTabQuickGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsTabQuickGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsTabQuickGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
