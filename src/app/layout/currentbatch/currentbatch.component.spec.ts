import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentbatchComponent } from './currentbatch.component';

describe('CurrentbatchComponent', () => {
  let component: CurrentbatchComponent;
  let fixture: ComponentFixture<CurrentbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
