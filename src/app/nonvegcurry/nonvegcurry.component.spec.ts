import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegcurryComponent } from './nonvegcurry.component';

describe('NonvegcurryComponent', () => {
  let component: NonvegcurryComponent;
  let fixture: ComponentFixture<NonvegcurryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvegcurryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegcurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
