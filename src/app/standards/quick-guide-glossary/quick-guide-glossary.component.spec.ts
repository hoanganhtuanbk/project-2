import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickGuideGlossaryComponent } from './quick-guide-glossary.component';

describe('QuickGuideGlossaryComponent', () => {
  let component: QuickGuideGlossaryComponent;
  let fixture: ComponentFixture<QuickGuideGlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickGuideGlossaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickGuideGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
