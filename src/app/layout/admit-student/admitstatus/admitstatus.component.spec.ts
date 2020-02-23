import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitstatusComponent } from './admitstatus.component';

describe('AdmitstatusComponent', () => {
  let component: AdmitstatusComponent;
  let fixture: ComponentFixture<AdmitstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmitstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
