import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectComponent } from './perfect.component';

describe('PerfectComponent', () => {
  let component: PerfectComponent;
  let fixture: ComponentFixture<PerfectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
