import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsTabLinksComponent } from './standards-tab-links.component';

describe('StandardsTabLinksComponent', () => {
  let component: StandardsTabLinksComponent;
  let fixture: ComponentFixture<StandardsTabLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsTabLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsTabLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
