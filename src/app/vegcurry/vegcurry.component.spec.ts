import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegcurryComponent } from './vegcurry.component';

describe('VegcurryComponent', () => {
  let component: VegcurryComponent;
  let fixture: ComponentFixture<VegcurryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegcurryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegcurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
