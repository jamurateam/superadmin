import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeHeadsCollectComponent } from './fee-heads-collect.component';

describe('FeeHeadsCollectComponent', () => {
  let component: FeeHeadsCollectComponent;
  let fixture: ComponentFixture<FeeHeadsCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeHeadsCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeHeadsCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
