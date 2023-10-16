import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateFormComponent } from './ultimate-form.component';

describe('UltimateFormComponent', () => {
  let component: UltimateFormComponent;
  let fixture: ComponentFixture<UltimateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimateFormComponent]
    });
    fixture = TestBed.createComponent(UltimateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
