import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsTabImplementationGuideComponent } from './standards-tab-implementation-guide.component';

describe('StandardsTabImplementationGuideComponent', () => {
  let component: StandardsTabImplementationGuideComponent;
  let fixture: ComponentFixture<StandardsTabImplementationGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsTabImplementationGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsTabImplementationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
