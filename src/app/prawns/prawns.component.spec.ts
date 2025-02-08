import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrawnsComponent } from './prawns.component';

describe('PrawnsComponent', () => {
  let component: PrawnsComponent;
  let fixture: ComponentFixture<PrawnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrawnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrawnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
