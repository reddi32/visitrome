import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DovemangiareComponent } from './dovemangiare.component';

describe('DovemangiareComponent', () => {
  let component: DovemangiareComponent;
  let fixture: ComponentFixture<DovemangiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DovemangiareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DovemangiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
