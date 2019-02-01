import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaredComponent } from './cared.component';

describe('CaredComponent', () => {
  let component: CaredComponent;
  let fixture: ComponentFixture<CaredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
