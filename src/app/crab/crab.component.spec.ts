import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrabComponent } from './crab.component';

describe('CrabComponent', () => {
  let component: CrabComponent;
  let fixture: ComponentFixture<CrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
