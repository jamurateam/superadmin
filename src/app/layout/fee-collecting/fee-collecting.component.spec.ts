import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCollectingComponent } from './fee-collecting.component';

describe('FeeCollectingComponent', () => {
  let component: FeeCollectingComponent;
  let fixture: ComponentFixture<FeeCollectingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeCollectingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCollectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
