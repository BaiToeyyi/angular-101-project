import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStyleComponent } from './template-style.component';

describe('TemplateStyleComponent', () => {
  let component: TemplateStyleComponent;
  let fixture: ComponentFixture<TemplateStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
