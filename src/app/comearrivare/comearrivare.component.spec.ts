import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComearrivareComponent } from './comearrivare.component';

describe('ComearrivareComponent', () => {
  let component: ComearrivareComponent;
  let fixture: ComponentFixture<ComearrivareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComearrivareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComearrivareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
