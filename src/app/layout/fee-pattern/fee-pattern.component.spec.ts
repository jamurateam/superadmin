import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeePatternComponent } from './fee-pattern.component';

describe('FeePatternComponent', () => {
  let component: FeePatternComponent;
  let fixture: ComponentFixture<FeePatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeePatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
