import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavedereComponent } from './davedere.component';

describe('DavedereComponent', () => {
  let component: DavedereComponent;
  let fixture: ComponentFixture<DavedereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavedereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavedereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
