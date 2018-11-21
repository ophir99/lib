import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectngproComponent } from './perfectngpro.component';

describe('PerfectngproComponent', () => {
  let component: PerfectngproComponent;
  let fixture: ComponentFixture<PerfectngproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectngproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectngproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
