import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickGuideOverviewComponent } from './quick-guide-overview.component';

describe('QuickGuideOverviewComponent', () => {
  let component: QuickGuideOverviewComponent;
  let fixture: ComponentFixture<QuickGuideOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickGuideOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickGuideOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
